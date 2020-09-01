import React from 'react';
import logo from './bookapp3.png';
import './App.css';
class App extends React.Component {

constructor(props) {
super(props);
this.state = { // initialization of variables
text: '',
word: '',
synonym: '',
find: '',
dictionary: [],
a: '',
output: [],
};
}

handleWordChange = event => this.setState({ word: event.currentTarget.value });
handleSynonymChange = event => this.setState({ synonym: event.currentTarget.value });
handleFindChange = event => this.setState({ find: event.currentTarget.value });

handleClickL = event => { // define actions for new word submission
  const { dictionary, word, synonym } = this.state; // initialize variables
  dictionary.push([word, synonym]); // add a new array element (i.e. WORD-SYNONYM pair)
  this.setState({ dictionary }); // save the dictionary
  {document.getElementById("Lnotify").style.visibility="visible"};
  setTimeout(function(){document.getElementById("Lnotify").style.visibility="hidden";},2000); // notify user
  console.log(this.state.dictionary); // show the current dictionary in the terminal
};
//function clearInputs() {
//  setTimeout(function(){document.getElementById("inBox1").reset()}, 5);
//  setTimeout(function(){document.getElementById("inBox2").reset()}, 5);
//}
handleClickR = event => {
  const { find, output } = this.state; // variable initialization
    let a = this.state.dictionary; // set dictionary to a variable

  while (output.length) {
    output.pop(); // clear the output to display new search results
  };
  for( let i = 0; i < a.length; i++) { // for the entire length of a,
    let child = a[i]; // define each word-synonym pair as 'child'
    for( let j = 0; j < 1; j++){ // for the word-synonym pair,
      let k = (!j) ? 1 : 0; // variable shortening for readability
      if ( find === child[j] ) { // if user input matches a child's WORD,
        output.push(child[k]); // add child's "NOT binary boolean" (i.e. SYNONYM) to the output
        this.setState({ output }); // update the output
      };
      if ( find === child[k] ) { // if user input matches a child's SYNONYM,
        output.push(child[(!k) ? 1 : 0]); // add child's WORD to the output
        this.setState({ output }); // update the output
      };
    }
  };

  {document.getElementById("Rnotify").style.visibility="visible"}; // show the output
};

render() {

return (

  <div className="App">

    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
    </div>

    <div className="App-content">

      <div className="App-Lblock">
        <input name="inBox1" type="text" className=
          "inBox-word" placeholder="add new word" autoComplete=
          "off" value={this.state.word} onChange={this.handleWordChange}/>
        <input name="inBox2" type="text" className=
          "inBox-syn" placeholder="synonym" autoComplete=
          "off" value={this.state.synonym} onChange={this.handleSynonymChange}/>
        <button type="button" name="submit" className=
          "enterWord" onClick={this.handleClickL}/>
        <div name="Lnotify" id="Lnotify" type="text" className=
          "Lnotify">Your definition has been added!</div>
      </div>

      <div className="App-Rblock">

        <input name="findBox" type="text" className=
          "inBox-find" placeholder="find a word" autoComplete=
          "off" value={this.state.find} onChange={this.handleFindChange}/>
        <button type="button" name="find" className=
          "findWord" onClick={this.handleClickR}/>

        <div name="Rnotify" id="Rnotify" type="text" className=
          "Rnotify">
        {(this.state.output).join("  ")}
        </div>

      </div>

    </div>

  </div>

);
}
}

export default App;

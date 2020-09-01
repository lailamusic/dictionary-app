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

handleClickL = event => {
  const { dictionary, word, synonym } = this.state;
// TODO insert word/synonym into this.state.dictionary only if that is not already present
  dictionary.push([word, synonym]);
  this.setState({ dictionary });
  {document.getElementById("Lnotify").style.visibility="visible"};
  console.log(this.state.dictionary);
};
//function clearInputs() {
//  setTimeout(function(){document.getElementById("inBox1").reset()}, 5);
//  setTimeout(function(){document.getElementById("inBox2").reset()}, 5);
//}
handleClickR = event => {
  const { find, output } = this.state;
    let a = this.state.dictionary;
  while (output.length) {
    output.pop();
  };
  for( let i = 0; i < a.length; i++){
    let child = a[i];
    for( let j = 0; j < 1; j++){
      if ( find === child[j] ) {
        output.push(child[(!j) ? 1 : 0]);
        this.setState({ output });
      };
    }
  };

  {document.getElementById("Rnotify").style.visibility="visible"};
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
          "notify">Your definition has been added!</div>
      </div>

      <div className="App-Rblock">
        <input name="findBox" type="text" className=
          "inBox-find" placeholder="find a word" autoComplete=
          "off" value={this.state.find} onChange={this.handleFindChange}/>
        <button type="button" name="find" className=
          "findWord" onClick={this.handleClickR}/>
        <div name="Rnotify" id="Rnotify" type="text" className=
          "notify">
        {JSON.stringify(this.state.output)}
        </div>
      </div>

    </div>

  </div>

);
}
}

export default App;

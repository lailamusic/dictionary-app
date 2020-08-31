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
output: [],
};
}

handleWordChange = event => this.setState({ word: event.currentTarget.value });
handleSynonymChange = event => this.setState({ synonym: event.currentTarget.value });
//handleFindChange = event => this.setState({ find: event.currentTarget.value });

handleClick = event => {
  const { dictionary, word, synonym } = this.state;
// TODO insert word/synonym into this.state.dictionary only if that is not already present
dictionary.push([word, synonym]);
this.setState({ dictionary });
//Lnotify.style.visibility = "visible";
// if (x === y && x !== '') {
// alert('A word cannot be its own synonym.'/* + this.state.value*/);
// //event.preventDefault();
// } else {
// if (this.wordGroup.includes(x)) {
// var k = this.wordGroup.indexOf(x);
// var h = this.wordGroup[k];
// this.wordGroup.splice(k, 1, h + '.' + y);}
// this.wordGroup.push(z);
// console.log(this.wordGroup);
// this.setState({ text: this.wordGroup });
//event.preventDefault();
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
          "enterWord" onClick={this.handleClick}/>
        <div name="Lnotify" type="text" className=
          "notify">Your definition has been added!</div>
      </div>

      <div className="App-Rblock">
        <input name="findBox" type="text" className=
          "inBox-find" placeholder="find a word" autoComplete=
          "off" value={this.state.find} onChange={this.handleFindChange}/>
        <button type="button" name="find" className=
          "findWord" onClick={this.handleClick}/>
        {JSON.stringify(this.state.dictionary)}
      </div>

    </div>

  </div>

);
}
}

export default App;

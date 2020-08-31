import React from 'react';
import logo from './bookapp3.png';
import './App.css';
//import Button from './app_component/Button';
// *import AddNew from './app_component/AddNew';
class App extends React.Component {

constructor(props) {
super(props);
this.state = {
text: '',
word: '',
synonym: '',
dictionary: [],
};
}

handleWordChange = event => this.setState({ word: event.currentTarget.value });

handleSynonymChange = event => this.setState({ synonym: event.currentTarget.value });

handleClick = event => {
const { dictionary, word, synonym } = this.state;

// TODO insert word/synonym into this.state.dictionary only if that is not already present


dictionary.push([word, synonym]);
this.setState({ dictionary });

// var x = word;
// var y = synonym;
// var z = x + '.' + y;
// if (x === y && x !== '') {
// alert('A word cannot be its own synonym.'/* + this.state.value*/);
// //event.preventDefault();
// } else {
// if (this.wordGroup.includes(x)) {
// var k = this.wordGroup.indexOf(x);
// var h = this.wordGroup[k];
// this.wordGroup.splice(k, 1, h + '.' + y);
// }
// this.wordGroup.push(z);
//
// console.log(this.wordGroup);
// this.setState({ text: this.wordGroup });
// document.getElementById('in1').value = '';
// document.getElementById('in2').value = '';
// }
//event.preventDefault();
};

render() {
return (
<div className="App">
<div className="App-header">
<img src={logo} className="App-logo" alt="logo"/>
<input name="inBox1" id="in1" type="text" className="inBox" placeholder=
"add new word" autoComplete="off" value={this.state.word} onChange={this.handleWordChange}/>
<p/>
<input name="inBox2" id="in2" type="text" className="inBox" placeholder=
"synonym" autoComplete="off" value={this.state.synonym} onChange={this.handleSynonymChange}/>
<p/>
<button type="button" name="submit" className="enterWord" onClick={this.handleClick}/>
</div>
{JSON.stringify(this.state.dictionary)}
</div>
);
}
}

export default App;

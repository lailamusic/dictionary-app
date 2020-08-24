import React from 'react';
import logo from './bookapp3.png';
import './App.css';
//import Button from './app_component/Button';
// *import AddNew from './app_component/AddNew';
class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {/*inBox1: " ", inBox2: " "*/};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.wordGroup = [];
      this.dictionary = this.wordGroup.toString;
    }

  handleInputChange(event) {
   }

  handleClick(event) {
      var x = document.forms["appForm"]["inBox1"].value;
      var y = document.forms["appForm"]["inBox2"].value;
      var z = x + "." + y;
      if (x === y && x !== "") {
      alert("A word cannot be its own synonym."/* + this.state.value*/);
      //event.preventDefault();
      }
      else {
        if (this.wordGroup.includes(x)===true) {
          var k = this.wordGroup.indexOf(x);
          var h = this.wordGroup[k];
          this.wordGroup.splice(k,1, h+"."+y);
        }
      this.wordGroup.push(z);

      console.log(this.wordGroup);
      document.getElementById('in1').value = "";
      document.getElementById('in2').value = "";
      }
      //event.preventDefault();
    }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p/>
        <img src={logo} className="App-logo" alt="logo"/>
        <p/> <p/>
        <form onSubmit={this.handleSubmit} name="appForm" id="appForm">
          <input name="inBox1" id="in1" type="text" className="inBox" placeholder=
          "add new word" autoComplete="off" value={this.state.inBox1} onChange={this.handleInputChange}/>
          <p/>
          <input name="inBox2" id="in2" type="text" className="inBox" placeholder=
          "synonym" autoComplete="off" value={this.state.inBox2} onChange={this.handleInputChange}/>
          <p/>
        <button type="button" name="submit" className="enterWord" onClick={this.handleClick}/>
        </form>
        <p/>
        <h1>
        </h1>
        <p/>
      </header>
    </div>
  );
}
}

export default App;

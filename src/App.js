import React from 'react'; import ReactDOM from 'react-dom';
import logo from './bookapp3.png'; import './App.css';
//import Button from './app_component/Button';
// *import AddNew from './app_component/AddNew';
class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {/*inBox1: " ", inBox2: " "*/};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

  handleInputChange(event) {
      //this.setState({value: event.target.value});
      //const target = event.target;
    //  const value = target.value;
    //  const name = target.name;
      const wordGroup = [/*this.state.inBox1, this.state.inBox2*/];

      //this.setState({
      //  [name]: value
    //});
   }

  handleClick(event) {
      var x = document.forms["appForm"]["inBox1"].value;
      var y = document.forms["appForm"]["inBox2"].value;
      var z = x + "-" + y + "/";
      const wordGroup=[];
      if (x === y && x !== "") {
      alert("A word cannot be its own synonym."/* + this.state.value*/);
      //event.preventDefault();
      }
      else {
      wordGroup.push(z);
      console.log(wordGroup);
      }
      // return <h1> Welcome.</h1>
      //event.preventDefault();
    }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p/>
        <img src={logo} className="App-logo" alt="logo"/>
        <p/>
        <form onSubmit={this.handleSubmit} name="appForm" id="appForm">
          <input name="inBox1" type="text" className="inBox" placeholder=
          "add new word" autoComplete="off" value={this.state.inBox1} onChange={this.handleInputChange}/>
          <p/>
          <input name="inBox2" type="text" className="inBox" placeholder=
          "synonym" autoComplete="off" value={this.state.inBox2} onChange={this.handleInputChange}/>
          <p/>
        <button type="button" name="submit" className="enterWord" onClick={this.handleClick}/>
        </form>

        <p>
        {this.state.inBox1 + " "}
        {this.state.inBox2 + " "}
        </p>

        <p/>
      </header>
    </div>
  );
}
}

export default App;

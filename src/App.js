import React from 'react'; import ReactDOM from 'react-dom';
import logo from './bookapp3.png'; import './App.css';
//import Button from './app_component/Button';
// *import AddNew from './app_component/AddNew';
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
    });
   }
    handleSubmit(event) {
      event.preventDefault();
    }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p/>
        <img src={logo} className="App-logo" alt="logo"/>
        <p/>
        <form onSubmit={this.handleSubmit} id="appForm">
          <input name="inBox1" type="text" className="inBox" placeholder=
          "add new word" autoComplete="off" value={this.state.inBox1} onChange={this.handleInputChange}/>
          <p/>
          <input name="inBox2" type="text" className="inBox" placeholder=
          "synonym" autoComplete="off" value={this.state.inBox2} onChange={this.handleInputChange}/>
        </form>
        <button type="submit" name="submit" className="enterWord"/>

        {this.state.inBox1 + " "}
        {this.state.inBox2 + " "}
        <p/>
      </header>
    </div>
  );
}
}

export default App;

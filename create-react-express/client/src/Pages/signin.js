
import React, { Component } from "react";
// import LoginBtn from "../components/LoginBtn";
import Axios from "axios";
import apiAuthor from "../utils/apiAuthor";

class SignIn extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    //this.setState({ username: "", password: "" });
    apiAuthor.getAuthor(this.state.username)
    .then(response => console.log(response));
  };



  render() {
    return (
      <main>
              <div className="App">
      {/* <div className="App-header"> */}
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Welcome to My Life Has Gone to the Dogs2</h2>
      </div>
      <p className="App-intro">
      The place where you can vent lifes frustrations and celebrate achievments
      </p>  
      <img src="https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif"/>
      <img src="https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif"/>
      <img src="https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif"/>
    </div>
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Signin</button>
      </form>
      </main>
    );
  }
}


export default SignIn;
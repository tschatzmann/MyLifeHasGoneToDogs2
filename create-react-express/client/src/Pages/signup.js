
import React, { Component } from "react";
import signinBtn from "../components/signinBtn";
import apiAuthor from "../utils/apiAuthor";
import Jumbotron from "../components/Dogjumbotron";

class Signup extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: "",
    email: ""
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
    console.log("trying o register");
    apiAuthor.saveAuthor(this.state)
    .then(response => console.log(response));
alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
   // this.setState({ username: "", password: "" });
  };

  render() {
    return (
        <main>
        {/* <h1>Signup</h1> */}
        <Jumbotron/>
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
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Signup</button>
      </form>
      </main>
    );
  }
}


export default Signup;

import React, { Component } from "react";
// import LoginBtn from "../components/LoginBtn";
import Axios from "axios";
import apiAuthor from "../utils/apiAuthor";
import Jumbotron from "../components/Dogjumbotron"

class SignIn extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: "",
    authorid: "",
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
    //this.setState({ username: "", password: "" });
    apiAuthor.getAuthor(this.state.username)
    .then(response => {
      if (response.data.password != this.state.password) {
        alert('The username or password is incorrect')
      } else {
      // if check for password is good run code below 
      // if password does not match alert that login is incorrect
      sessionStorage.setItem('authenticated', true);
      this.setState({
        authorid: response.data._id,
      }, () => {
        this.props.history.push({
          pathname: '/posts',
          state: { authorid: this.state.authorid}
        });
      });
    }
    });
  };



  render() {
    return (
      <main>
              {/* <div className="App"> */}
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
        <button onClick={this.handleFormSubmit}>Signin</button>
      </form>
      </main>
    );
  }
}


export default SignIn;

import React, { Component } from "react";
import signinBtn from "../components/signinBtn";
import apiAuthor from "../utils/apiAuthor";
import Jumbotron from "../components/dogheader";


let  validationErrorEmail = false;
let   validationErrorPassword = false;

class Signup extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: "",
    email: ""
  };


  verifyEmail(email){
    console.log('in email validation')
    let pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(email)) {
       validationErrorEmail = false;
    } else {
        alert('Bad email address: ' + email);
        validationErrorEmail = true;
    }

        console.log(validationErrorEmail);
    };

  verifyPassword(){
    console.log("in password validataion")
    if (this.state.password.length < 6){
      // alert('Password must be at least 6 characters');
      validationErrorPassword = true
      console.log(validationErrorPassword)
      }
    }

  resetValidationError(){
    validationErrorEmail =  false
    validationErrorPassword= false
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
    console.log(this.state.email);
    this.verifyEmail(this.state.email);
    this.verifyPassword();
    console.log(`${validationErrorPassword} ${validationErrorPassword}`);
    if (validationErrorEmail == false && validationErrorPassword == false) {
      apiAuthor.saveAuthor(this.state)
      .then(response => {
        console.log('back from save')
        console.log(response)
        if (response.data == null){
          alert("user not saved")
        }
        else{
          alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
          // this.setState({ username: "", password: "" });
       
        } 
      } )
      .catch(error => {
        console.log(error);
        alert(`user ${this.state.username} or email ${this.state.email} already exists`)
      })
    }
    else{
      let emailMsg = "";
      let passwordMsg = "";
        if (validationErrorEmail == true){
          emailMsg = "Please enter a valid email"
        };

        if (validationErrorPassword== true){
          passwordMsg = "Password must be at least 6 characters"
        };

      alert(`${emailMsg}  ${passwordMsg}`)
    }

  };

  render() {
    return (
        <main>
        {/* <h1>Signup</h1> */}
        <Jumbotron/>
      <form>
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
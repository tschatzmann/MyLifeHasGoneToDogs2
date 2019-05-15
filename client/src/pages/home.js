
import React, { Component } from "react";
// import HomeBtn from "../components/HomeBtn";

class Home extends Component {
  // // Setting the initial values of this.state.username and this.state.password
  // state = {
  //   username: "",
  //   password: ""
  // };

  // // handle any changes to the input fields
  // handleInputChange = event => {
  //   // Pull the name and value properties off of the event.target (the element which triggered the event)
  //   const { name, value } = event.target;

  //   // Set the state for the appropriate input field
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, prevent the default event and alert the username and password
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
  //   this.setState({ username: "", password: "" });
  // };

  render() {
    return (
      <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Welcome to My Life Has Gone to the Dogs</h2>
      </div>
      <p className="App-intro">
      The place where you can vent lifes frustrations and celebrate achievments
      </p>  
      <img src="https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif"/>

      <img src="https://media.giphy.com/media/fJHTnw2yIyob6/giphy.gif"/>
      <img src="https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif"/>
      <img src="https://media.giphy.com/media/x3xccAsYXuslW/giphy.gif"/>
      <img src="https://media.giphy.com/media/1zR9GPQzd2or9IJVqG/giphy.gif"/>
      <img src="https://media.giphy.com/media/cKwLWoHvmxcn6/giphy.gif"/>
      <img src="https://media.giphy.com/media/YB91IzHGyeeySRTIgy/giphy-downsized-large.gif"/>

{/* <img src="https://media.giphy.com/media/fJHTnw2yIyob6/giphy.gif"/> */}
<img src="https://media.giphy.com/media/5bgS90uCmWoWp2hBvj/giphy.gif"/>
{/* <img src="https://media.giphy.com/media/x3xccAsYXuslW/giphy.gif"/> */}
<img src="https://media.giphy.com/media/1zR9GPQzd2or9IJVqG/giphy.gif"/>
{/* <img src="https://media.giphy.com/media/8lHaXDdlmmXvivQhjx/giphy-downsized-large.gif"/> */}
{/* <img src="https://media.giphy.com/media/cKwLWoHvmxcn6/giphy.gif"/> */}
<img src="https://media.giphy.com/media/l3q2FiP4yhoOWzvEc/giphy.gif"/>
    </div>
  );
  }
}


export default Home;
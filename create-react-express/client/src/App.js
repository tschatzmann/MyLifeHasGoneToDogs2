import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//import logo from "./logo.svg";
import Home from "./Pages/home";
import Posting from './Pages/postings';
import Signin from "./Pages/signin";
import Signup from "./Pages/signup";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posting</Link></li>
            <li><Link to="/signin">Singin</Link></li>
            <li><Link to="/signup">Signup</Link></li>

          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posting} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>
    </Router>

  
    );
  }
}

export default App;

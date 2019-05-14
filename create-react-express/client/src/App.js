import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import logo from "./logo.svg";
import Home from "./pages/home";
import Posting from './pages/postings';
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import {PrivateRoute} from "./components/privateroute";


import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Signin</Link></li>
            <li><Link to="/posts">{sessionStorage.getItem('authentivate') ? 'Posting' : null}</Link></li>
            <li><Link to="/signin">Singin</Link></li>
            <li><Link to="/signup">Signup</Link></li>

          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/"  component={Signin} />
            <PrivateRoute path="/posts" component={Posting} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            {/* <Route component={Error} /> */}
          </Switch>
        </main>
      </div>
    </Router>

  
    );
  }
}

export default App;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {Link} from 'react-router-dom';
  //
import Posting from '../../pages/postings';
import Signin from "../../pages/signin";
import Signup from "../../pages/signup";


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {/* <Route exact path="/"  component={Signin} />
            <Route path="/posts" component={Posting} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} /> */}
              <NavItem>
                <NavLink href="/posts">Posts</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/signin">Signin</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
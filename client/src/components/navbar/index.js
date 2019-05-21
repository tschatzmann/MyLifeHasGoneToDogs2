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
  DropdownItem
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import "./css/style.css"


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleblinkclick = event => {
    console.log('link clicked');
    event.preventDefault();
    sessionStorage.setItem('authenticated', false);
    this.props.history.push({
      pathname: '/signin',
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" dark>
          <NavbarBrand href="/" className="mr-auto">MY LIFE HAS GONE TO THE DOGS</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/posts">{sessionStorage.getItem('authenticated') ? 'Posting' : null}</Link>
              </NavItem>
              <NavItem>
                <Link to="/signup">Sign Up</Link>
              </NavItem>
              <NavItem>
                <Link to="/signin">Sign In</Link>
              </NavItem>
              <NavItem>
                <Link onClick={(e) => this.handleblinkclick(e)}>Sign Out</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(NavBar);
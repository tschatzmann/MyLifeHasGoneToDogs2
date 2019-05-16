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
  import {Link, withRouter} from 'react-router-dom';
  import "./css/style.css"


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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">My Life Has Gone To The Dogs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className = "pagelinks" to = "/posts">{sessionStorage.getItem('authenticated') ? 'Posting' : null}</Link>
              </NavItem>
              <NavItem>
                <Link className = "pagelinks" to="/signup">Signup</Link>
              </NavItem>
              <NavItem>
                  <Link className = "pagelinks" onClick={(e) => this.handleblinkclick(e)}>Signout</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter (NavBar);
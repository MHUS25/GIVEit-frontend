import React, {Component} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';




export class NavBar extends React.Component{
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


  render(){

    return(
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">GIVEit</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2">Sign in</NavbarToggler>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2">Sign out</NavbarToggler>

        </Navbar>
      </div>
    );
  }
}

export default NavBar;

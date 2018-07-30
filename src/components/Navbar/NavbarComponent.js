import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './css/NavbarComponent.css';
class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar brand='DASHBOARD' right>
          <NavItem><Icon>search</Icon></NavItem>
          <NavItem href=''>Search</NavItem>
          <NavItem>+</NavItem>
          <NavItem href=''>New Delivery</NavItem>
          <NavItem>+</NavItem>
          <NavItem href=''>New Patient</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;

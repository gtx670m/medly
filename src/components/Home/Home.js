import React, { Component } from 'react';
// import logo from './logo.svg';
import NavbarComponent from '../Navbar/NavbarComponent';
import SidenavComponent from '../Sidenav/SidenavComponent';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
          <NavbarComponent />
          <SidenavComponent/>
      </div>
    );
  }
}

export default Home;
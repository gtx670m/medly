import React, { Component } from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import SidenavComponent from '../Sidenav/SidenavComponent';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
            <NavbarComponent />
            <SidenavComponent/>
        </div>
      </div>
    );
  }
}

export default Home;
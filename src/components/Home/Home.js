import React, { Component } from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import SidenavComponent from '../Sidenav/SidenavComponent';
import Footer from '../Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
            <NavbarComponent />
            <SidenavComponent/>
            <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
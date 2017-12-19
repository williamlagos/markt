import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const purple = {
      backgroundColor: '#693E90',
      border: '0px'
    };
    return (
      <nav className="navbar navbar-static-top" style={purple}>
        <a className="navbar-brand mr-auto ml-auto" href="/">
          <img alt="Icon" className="d-inline navbar-img" src="./icon.png" style={{ height: '30px' }}/>
          <p className="d-inline" style={{ fontFamily: 'Roboto Slab', color: 'white' }}> Vupit </p>
        </a>
      </nav>
    );
  }
}

export default Navbar;

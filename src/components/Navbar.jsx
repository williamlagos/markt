import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

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
        <Link to="/beer" className="menu-item text-left"><i class="fa fa-beer"></i></Link>&nbsp;
        <Link to="/distilled" className="menu-item text-left"><i class="fa fa-glass-martini"></i></Link>&nbsp;
        <Link to="/wine" className="menu-item text-left"><i class="fa fa-trophy"></i></Link>&nbsp;
      </nav>
    );
  }
}

export default Navbar;

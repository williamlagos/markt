import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Address from './Address.jsx'
import Profile from './Profile.jsx'
import Bag from './Bag.jsx'

class Navbar extends Component {
  render() {
    const purple = {
      backgroundColor: '#7A3B91',
      border: '0px'
    };
    const lightpurple = {
      backgroundColor: '#8B4CA2',
      border: '0px'
    };
    return (
      <div>
        <nav className="navbar navbar-static-top" style={purple}>
          <a className="navbar-brand" href="/">
            <img alt="Icon" className="d-inline navbar-img" src="./icon.png" style={{ height: '30px' }}/>
            <p className="d-inline" style={{ fontFamily: 'Roboto Slab', color: 'white' }}> Vupit </p>
          </a>
          <Address display="d-none d-sm-block" width="500px" outline="btn-outline-light"/>
          <Profile/>&nbsp;&nbsp;
          <Bag/>
        </nav>
        <nav className="navbar navbar-static-top" style={lightpurple}>
          <div className="container-fluid">
            <Link to="/catalog" className="menu-item text-left"><i className="fa fa-search"></i>&nbsp;Buscar</Link>
            <Link to="/" className="menu-item text-left"><i className="fa fa-compass"></i>&nbsp;Descobrir</Link>
            <Link to="/request" className="menu-item text-left"><i className="fa fa-bars"></i>&nbsp;Pedidos</Link>
          </div>
        </nav>
        <nav className="navbar navbar-static-top navbar-light">
          <Address display="d-block d-sm-none" width="200px" outline="btn-outline-secondary"/>
        </nav>
      </div>
    );
  }
}

export default Navbar;

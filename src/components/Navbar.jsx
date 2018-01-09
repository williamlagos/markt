import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Address from './Address.jsx'

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
          <img alt="user" src="./user.png" className="float-right rounded-circle img-fluid" style={{ maxHeight: '30px' }}/>&nbsp;&nbsp;
          <img alt="bag" src="./bag.png" className="img-fluid" style={{ maxHeight: '30px' }}/>
        </nav>
        <nav className="navbar navbar-static-top" style={lightpurple}>
          <Link to="/search" className="menu-item text-left"><i class="fa fa-search"></i>&nbsp;Buscar</Link>
          <Link to="/discover" className="menu-item text-left"><i class="fa fa-compass"></i>&nbsp;Descobrir</Link>
          <Link to="/requests" className="menu-item text-left"><i class="fa fa-bars"></i>&nbsp;Pedidos</Link>
        </nav>
        <nav className="navbar navbar-static-top navbar-light">
          <Address display="d-block d-sm-none" width="200px" outline="btn-outline-secondary"/>
        </nav>
      </div>
    );
  }
}

export default Navbar;

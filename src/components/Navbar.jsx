import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    const purple = {
      backgroundColor: '#693E90',
      border: '0px'
    };
    const lightpurple = {
      backgroundColor: '#7A4FA1',
      border: '0px'
    };
    return (
      <div>
        <nav className="navbar navbar-static-top" style={purple}>
          <a className="navbar-brand" href="/">
            <img alt="Icon" className="d-inline navbar-img" src="./icon.png" style={{ height: '30px' }}/>
            <p className="d-inline" style={{ fontFamily: 'Roboto Slab', color: 'white' }}> Vupit </p>
          </a>
          <form className="form-inline mr-auto ml-auto">
            <input type="text" className="form-control" placeholder="Endereço"/>
          </form>
        </nav>
        <nav className="navbar navbar-static-top" style={lightpurple}>
          <Link to="/beer" className="menu-item text-left"><i class="fa fa-beer">Cerveja</i></Link>&nbsp;
          <Link to="/distilled" className="menu-item text-left"><i class="fa fa-glass-martini">Destilado</i></Link>&nbsp;
          <Link to="/wine" className="menu-item text-left"><i class="fa fa-trophy">Vinho</i></Link>&nbsp;
        </nav>
      </div>
    );
  }
}

export default Navbar;

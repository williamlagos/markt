import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
          <form className="form-inline mr-auto ml-auto">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Endereço"/>
              <div className="input-group-append">
                <button className="btn btn-outline-light" style={{ borderRadius: '0 0.25rem 0.25rem 0' }} type="button">Pesquisar</button>
              </div>
            </div>
          </form>
          <img alt="user" src="./user.png" className="rounded-circle img-fluid" style={{ maxHeight: '30px' }}/>&nbsp;&nbsp;
          <img alt="bag" src="./bag.png" className="img-fluid" style={{ maxHeight: '30px' }}/>
        </nav>
        <nav className="navbar navbar-static-top" style={lightpurple}>
          <Link to="/search" className="menu-item text-left"><i class="fa fa-search"></i>&nbsp;Buscar</Link>
          <Link to="/discover" className="menu-item text-left"><i class="fa fa-compass"></i>&nbsp;Descobrir</Link>
          <Link to="/requests" className="menu-item text-left"><i class="fa fa-bars"></i>&nbsp;Pedidos</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from 'react';
import Address from './Address.jsx'
import Profile from './Profile.jsx'
import Bag from './Bag.jsx'

class Navbar extends Component {
  route(choice, data) {
    this.props.navigate(choice, data)
  }

  checkAgent () {
    const standalone = window.navigator.standalone
    const userAgent = window.navigator.userAgent.toLowerCase()
    const safari = /safari/.test(userAgent)
    const ios = /iphone|ipod|ipad/.test(userAgent)
    if (ios) {
      if (!standalone && safari) return 1 // 'browser'
      else if (standalone && !safari) return 2 // 'standalone'
      else if (!standalone && !safari) return 3 // 'wkwebview'
    } else {
      return 0 // 'not iOS'
    }
  }

  render () {
    const query = {}
    const status = {}
    const purple = {}
    const lightpurple = {}
    if (this.checkAgent() > 0) {
      status.display = 'block'
      status.height = '20px'
      lightpurple.top = '78px'
      query.marginTop = '118px'
      purple.top = '20px'
    } else {
      status.display = 'none'
      lightpurple.top = '58px'
      query.marginTop = '98px'
      purple.top = '0px'
    }
    status.backgroundColor = '#bb95c9'
    purple.backgroundColor = '#7A3B91'
    lightpurple.backgroundColor = '#8B4CA2'
    lightpurple.border = '0px'
    purple.border = '0px'
    return (
      <div>
        <nav className="navbar fixed-top" style={status}></nav>
        <nav className="navbar fixed-top" style={purple}>
          <a className="navbar-brand" href="/">
            <img alt="Icon" className="d-inline navbar-img" src="./assets/icon.png" style={{ height: '30px' }}/>
            <p className="d-inline" style={{ fontFamily: 'Roboto Slab', color: 'white' }}> Vupit </p>
          </a>
          <Address display="d-none d-sm-block" width="500px" outline="btn-outline-light"/>
          <Profile/>&nbsp;&nbsp;
          <Bag navigate={(choice) => this.route(choice)}/>
        </nav>
        <nav className="navbar fixed-top" style={lightpurple}>
          <div className="container-fluid">
            <a href="#" className="menu-item text-left" onClick={() => this.route('catalog', {})}><i className="fa fa-search"></i>&nbsp;Buscar</a>
            <a href="#" className="menu-item text-left" onClick={() => this.route('home', {})}><i className="fa fa-compass"></i>&nbsp;Descobrir</a>
            <a href="#" className="menu-item text-left" onClick={() => this.route('request', {})}><i className="fa fa-bars"></i>&nbsp;Pedidos</a>
          </div>
        </nav>
        <nav className="navbar sticky-top navbar-light" style={query}>
          <Address display="d-block d-sm-none" width="200px" outline="btn-outline-secondary"/>
        </nav>
      </div>
    );
  }
}

export default Navbar;

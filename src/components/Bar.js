import React, { Component } from 'react'
import Form from './Form'

class Bar extends Component {
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
    const icon = { height: '30px', maxHeight: '30px' }
    const query = {}
    const status = { backgroundColor: '#BB95C9', border: '0px' }
    const purple = { backgroundColor: '#77448F', border: '0px' }
    const border = { backgroundColor: '#8B4CA2', border: '0px', padding: '8px 0px' }
    if (this.checkAgent() > 0) {
      status.top = '0px'
      status.height = '20px'
      border.top = '78px'
      purple.top = '20px'
      query.marginTop = '118px'
    } else {
      status.display = 'none'
      border.top = '58px'
      purple.top = '0px'
      query.marginTop = '98px'
    }
    return (
      <div>
        <nav className="navbar fixed-top" style={status}></nav>
        <nav className="navbar fixed-top" style={purple}>
          <a className="navbar-brand" href="/">
            <img alt="Icon" className="d-inline navbar-img" src="./assets/iconwhite.png" style={icon}/>
            <p className="d-inline" style={{ fontFamily: 'Roboto Slab', color: 'white' }}> Delivery </p>
          </a>
          <Form display="d-none" width="500px" outline="btn-outline-light"/>
          <a href="#" onClick={this.props.showProfile} className="d-none ml-auto">
            <img alt="user" src="./assets/user.png" className="float-right rounded-circle img-fluid" style={icon}/>
          </a>&nbsp;&nbsp;
          <a href="#" onClick={this.props.showCart}>
            <img alt="bag" src="./assets/bag.png" className="img-fluid" style={icon}/>
          </a>
        </nav>
        <nav className="navbar fixed-top" style={border}>
          <div className="container-fluid">
            <a href="#" className="menu-item text-left" onClick={() => this.props.showProducts('')}><i className="fa fa-th"></i>&nbsp;Produtos</a>
            <a href="#" className="menu-item text-left" onClick={this.props.showProviders}><i className="fa fa-compass"></i>&nbsp;Descobrir</a>
            <a href="#" className="menu-item text-left" onClick={this.props.showRequests}><i className="fa fa-bars"></i>&nbsp;Pedidos</a>
          </div>
        </nav>
        <nav className="navbar sticky-top navbar-light" style={query}>
          <Form display="d-none" width="200px" outline="btn-outline-secondary"/>
        </nav>
      </div>
    )
  }
}

export default Bar

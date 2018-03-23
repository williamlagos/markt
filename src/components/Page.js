import React, { Component } from 'react'
import Register from './Register.js'
import Login from './Login.js'

class Page extends Component {
  render () {
    const isRegistered = this.props.registered
    const customBackground = {
      background: 'url("./assets/friends.jpg")',
      backgroundSize: 'cover'
    }
    const context = isRegistered ? (
      <Login {...this.props}/>
    ) : (
      <Register {...this.props}/>
    )
    return (
      <div id="page" style={customBackground}> {context} </div>
    )
  }
}

export default Page

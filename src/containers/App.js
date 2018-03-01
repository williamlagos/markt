import React, { Component } from 'react'
import Entrance from './Entrance'
import Navigation from './Navigation'
import Content from './Content'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { token: sessionStorage.getItem('token') || null }
  }

  render () {
    if (this.state.token === null) {
      return <Entrance authenticate={(token) => this.login(token)}/>
    } else {
      return (
        <div>
          <Navigation/>
          <Content/>
        </div>
      )
    }
  }

  login (token) {
    sessionStorage.setItem('token', token)
    this.setState({ token })
  }
}

export default App

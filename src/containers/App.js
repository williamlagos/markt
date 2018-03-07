import React, { Component } from 'react'
import Entrance from './Entrance'
import Navigation from './Navigation'
import Content from './Content'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: sessionStorage.getItem('token') || null,
      id: sessionStorage.getItem('id') || null
    }
  }

  render () {
    if (this.state.token === null) {
      return <Entrance authenticate={(token) => this.login(token)}/>
    } else {
      return (
        <div>
          <Navigation/>
          <Content id={this.state.id}/>
        </div>
      )
    }
  }

  login (data) {
    const { token, id } = data
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('id', id)
    this.setState({ token, id })
  }
}

export default App

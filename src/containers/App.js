import React, { Component } from 'react'
import Entrance from './Entrance'
import Navigation from './Navigation'
import Content from './Content'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: sessionStorage.getItem('token') || null,
      board: 'default',
      data: ''
    }
  }

  render () {
    const api = 'http://vupit.efforia.io'
    const choice = this.state.board
    if (this.state.token === null) {
      return <Entrance url={api} authenticate={(token) => this.login(token)}/>
    } else {
      return (
        <div>
          <Navigation navigate={(choice) => this.route(choice)}/>
          <div className="container-fluid">
            <div className="row">
              <Content url={api} navigate={(choice) => this.route(choice)} change={choice} data={this.state.data}/>
            </div>
          </div>
        </div>
      )
    }
  }

  login (token) {
    sessionStorage.setItem('token', token)
    this.setState({ token })
  }

  route (board, data) {
    this.setState({ board, data })
  }
}

export default App;

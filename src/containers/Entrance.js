import React, { Component } from 'react'
import { string, func } from 'prop-types'
import axios from 'axios'
import Page from '../components/Page'

class Entrance extends Component {
  constructor (props) {
    super(props)
    this.state = { passw: '', login: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    const api = this.props.url
    axios.post(api + '/api/auth/token/', {
      username: this.state.login,
      password: this.state.passw
    }).then((result) => {
      this.props.authenticate(result.data.token)
    })
    event.preventDefault()
  }

  handleChange (event) {
    const name = event.target.name
    const vals = event.target.value
    this.setState({ [name]: vals })
  }

  render () {
    return <Page change={this.handleChange} submit={this.handleSubmit}/>
  }
}

Entrance.propTypes = {
  url: string,
  authenticate: func
}

export default Entrance

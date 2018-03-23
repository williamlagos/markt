import React, { Component } from 'react'
import { connect } from 'react-redux'
import { string, func } from 'prop-types'
import axios from 'axios'
import Page from '../components/Page'

class Entrance extends Component {
  constructor (props) {
    super(props)
    this.state = { passw: '', login: '', registered: true }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleSubmit (event) {
    const api = this.props.api
    axios.post(api + '/api/auth/token/', {
      username: this.state.login,
      password: this.state.passw
    }).then((result) => {
      this.props.authenticate(result.data)
    })
    event.preventDefault()
  }

  handleChange (event) {
    const name = event.target.name
    const vals = event.target.value
    this.setState({ [name]: vals })
  }

  handleRegister (event) {
    this.setState({ registered: false })
  }

  render () {
    const props = {
      registered: this.state.registered,
      register: this.handleRegister,
      change: this.handleChange,
      submit: this.handleSubmit
    }
    return <Page {...props}/>
  }
}

const mapStateToProps = (state) => ({ api: state.fetch })

Entrance.propTypes = {
  url: string,
  authenticate: func
}

const EntranceContainer = connect(mapStateToProps)(Entrance)

export default EntranceContainer

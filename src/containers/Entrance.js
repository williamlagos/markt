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
    }).catch((reason) => {
      console.log(reason)
    })
    event.preventDefault()
  }

  handleChange (event) {
    const name = event.target.name
    const vals = event.target.value
    this.setState({ [name]: vals })
  }

  handleRegister (event) {
    event.preventDefault()
    if (!this.state.registered) {
      const p1 = this.state.passw1
      const p2 = this.state.passw2
      const api = this.props.api
      axios({
        headers: { 'Authorization': 'Token ' + this.props.token },
        method: 'post',
        url: api + '/api/profiles/',
        data: {
          user: {
            username: this.state.username,
            password: p1 === p2 ? p1 : 'password',
            email: this.state.email
          },
          lat: 0.0,
          lon: 0.0,
          name: this.state.name,
          description: 'Delivery user',
          address: this.state.address,
          phone: this.state.phone,
          side: 1,
          rank: 5
        }
      }).then((result) => {
        this.setState({ registered: true})
      }).catch((reason) => {
        // console.log(reason)
      })
    } else {
      this.setState({ registered: false })
    }
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

const mapStateToProps = (state) => ({ api: state.fetch.url, token: state.fetch.admin })

Entrance.propTypes = {
  url: string,
  authenticate: func
}

const EntranceContainer = connect(mapStateToProps)(Entrance)

export default EntranceContainer

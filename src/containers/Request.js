import React, { Component } from 'react'
import List from '../components/List'
import axios from 'axios'

class Request extends Component {
  constructor (props) {
    super(props)
    this.state = { requests: '' }
    this.key = sessionStorage.getItem('token')
    this.api = this.props.url
  }

  componentDidMount () {
    axios.get(this.api + '/api/requests/', {
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let requests = response.data.results
      this.setState({ requests })
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <List items={this.state.requests}/>
        </div>
      </div>
    )
  }
}

export default Request

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showProgress } from '../actions'
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
    axios.get(this.api + `/api/requests/?client=${this.props.id}`, {
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
          <List items={this.state.requests} progress={this.props.showProgress} brief />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ api: state.fetch })
const mapDispatchToProps = { showProgress }

const RequestContainer = connect(mapStateToProps, mapDispatchToProps)(Request)

export default RequestContainer

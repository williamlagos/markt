import React, { Component } from 'react'
import List from '../components/List'
import axios from 'axios'

class Catalog extends Component {
  constructor (props) {
    super(props)
    this.state = { items: [] }
    this.key = sessionStorage.getItem('token')
    this.api = this.props.url
  }

  componentDidMount () {
    // Providers fetching
    axios.get(this.api + '/api/profiles/?side=2', {
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let items = response.data.results
      this.setState({ items })
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <List items={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default Catalog

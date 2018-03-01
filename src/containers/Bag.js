import React, { Component } from 'react'
import List from '../components/List'
import axios from 'axios'

class Bag extends Component {
  constructor (props) {
    super(props)
    let bagItems = JSON.parse(localStorage.getItem('cart')) || []
    this.state = { items: bagItems }
    this.api = this.props.url
    this.key = sessionStorage.getItem('token')
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    let products = this.state.items
    products.map((product) => {
      return axios({
        method: 'post',
        url: this.api + '/api/requests/',
        headers: { 'Authorization': 'Token ' + this.key },
        data: {
          'provider': product.provider,
          'products': [ product.key.id ],
          'estimated': '2018-12-04T12:00:00Z'
        }
      }).then((response) => {
        localStorage.removeItem('cart')
      })
    })
  }
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <List items={this.state.items}/>
          <div className="col-md-12">
            <button className="btn btn-block btn-success" onClick={this.handleClick}> Fechar pedido com os produtos </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Bag

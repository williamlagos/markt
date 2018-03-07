import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import axios from 'axios'

class Bag extends Component {
  constructor (props) {
    super(props)
    this.state = { items: JSON.parse(localStorage.getItem('cart')) || [] }
    this.api = this.props.url
    this.key = sessionStorage.getItem('token')
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    let products = this.props.bag.items
    products.map((product) => {
      return axios({
        method: 'post',
        url: this.api + '/api/requests/',
        headers: { 'Authorization': 'Token ' + this.key },
        data: {
          'client': this.props.id,
          'provider': product.provider,
          'products': [ product.key.id ],
          'estimated': '2018-12-04T12:00:00Z'
        }
      }).then((response) => {
        localStorage.removeItem('cart')
      })
    })
    event.preventDefault()
  }
  render () {
    const bag = this.props.bag
    return (
      <div className="container-fluid">
        <div className="row">
          <List horizontal items={bag.items}/>
          <div className="col-md-12">
            <button className="btn btn-block btn-success" onClick={this.handleClick}> Fechar pedido com os produtos </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ bag: state.cart })

const BagContainer = connect(mapStateToProps)(Bag)

export default BagContainer

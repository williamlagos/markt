import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showRequests } from '../actions'
import Detail from '../components/Detail'
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
      const request = {
        'client_id': this.props.id,
        'provider_id': product.provider,
        'request_products': [ product.key.id ],
        'estimated': new Date().toISOString()
      }
      return axios({
        method: 'post',
        url: this.api + '/api/requests/',
        headers: { 'Authorization': 'Token ' + this.key },
        data: request
      }).then((response) => {
        localStorage.removeItem('cart')
        this.props.showRequests()
      })
    })
    event.preventDefault()
  }
  render () {
    const bag = this.props.bag
    if (bag.items.length > 0) {
      return (
        <div className="container-fluid">
          <div className="row">
            <List horizontal items={bag.items}/>
            <div className="col-md-12">
              <button className="btn btn-block btn-success" style={{cursor: 'pointer'}} onClick={this.handleClick}> Fechar pedido com os produtos </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container-fluid">
          <div className="row">
            <Detail image="./assets/drinks.png" title="Carrinho" text="Você não possui itens em seu carrinho no momento"/>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({ bag: state.cart })
const mapDispatchToProps = { showRequests }

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(Bag)

export default BagContainer

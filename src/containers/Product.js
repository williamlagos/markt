import React, { Component } from 'react'
import List from '../components/List'
import axios from 'axios'

class Product extends Component {
  constructor (props) {
    super(props)
    this.state = { products: [] }
    this.key = sessionStorage.getItem('token')
    this.api = this.props.url
  }

  componentDidMount () {
    // Fetching products by provider or all
    const query = this.props.data || ''
    axios.get(this.api + `/api/stocks/${query}`, {
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let products = response.data.results
      products.map((product) => {
        axios.get(product.key, {
          headers: { 'Authorization': 'Token ' + this.key }
        }).then((response) => {
          return response.data
        })
      })
      this.setState({ products })
    })
  }

  handleClick (value) {
    let products = this.state.products.filter((product) => {
      return product.key.id === value
    })
    products.map((item) => {
      // let identifier = item.key.id;
      let cart = localStorage.getItem('cart') || JSON.stringify({'items': []})
      let products = JSON.parse(cart)['items']
      products.push(item)
      localStorage.setItem('cart', JSON.stringify({ 'items': products }))
      return item
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <List items={this.state.products}/>
        </div>
      </div>
    )
  }
}

export default Product

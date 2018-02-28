import React, { Component } from 'react'
// import { string } from 'prop-types'

class List extends Component {
  render () {
    const overflow = {
      overflow: 'hidden',
      maxHeight: '250px'
    }
    if (this.props.items.length !== 0) {
      return this.props.items.map((item, index) => {
        return (
          <div key={index} className="col-md-4" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <a href="#" style={overflow} onClick={() => this.access('product', `/product?provider=${item.user.id}`)}>
                <img className="card-img-top" src={item.photo} alt="Provider"/>
              </a>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{item.address}</small>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return (<div/>)
    }
  }
}

List.propTypes = {
  // items: string
}

export default List

/*

import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ''
    };
    this.key = sessionStorage.getItem('token');
    this.api = this.props.url;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(`/api/stocks/${this.props.data}`)
    axios.get(this.api + `/api/stocks/${this.props.data}`,{
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let products = response.data.results;
       products.map((product) => {
        axios.get(product.key,{
          headers: { 'Authorization': 'Token ' + this.key }
        }).then((response) => {
          return response.data;
        })
      });
      this.setState({ products });
    });
  }

  handleClick(value) {
    let products = this.state.products.filter((product) => {
      return product.key.id === value;
    });
    products.map((item) => {
      // let identifier = item.key.id;
      let cart = localStorage.getItem('cart') || JSON.stringify({'items': []});
      let products = JSON.parse(cart)['items'];
      products.push(item);
      localStorage.setItem('cart', JSON.stringify({ 'items': products }));
      return item;
    });
  }

  render() {
    if(this.state.products.length !== 0) {
      let products = this.state.products;
      return products.map((product) => {
        let p = product.key;
        return (
          <div className="col-md-3" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <a style={{ width: '100%' }} value={p.id} href="#product" onClick={() => this.handleClick(p.id)}>
                <img className="card-img-top img-fluid" style={{ width: '30px' }} src={p.photo} alt="Provider"/>
              </a>
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        );
      })
    } else {
       return (
        <div>
          <br/><img className="img-fluid" alt="Drinks" src="./drinks.png"/><br/><br/>
          <h1>Bem-vindo ao Vupit App</h1>
          <p>No momento não há bebidas para você escolher.</p>
        </div>
      );
      return (<div/>)
    }
  }
}

export default Product;

*/

/*

import React, { Component } from 'react';
import axios from 'axios';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = { requests: '' }
    this.key = sessionStorage.getItem('token');
    this.api = this.props.url;
  }

  componentDidMount() {
    axios.get(this.api + '/api/requests/',{
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let requests = response.data.results;
      this.setState({ requests });
    });
  }

  render() {
    if(this.state.requests.length !== 0) {
      let requests = this.state.requests;
      return requests.map((request, index) => {
        return (
          <div key={index} className="col-md-12" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <div className="card-body text-left">
                <h6 className="card-text">Pedido {request.id}</h6>
              </div>
            </div>
          </div>
        );
      })
    } else {
      return (<div/>);
    }
  }
}

export default Request;

*/

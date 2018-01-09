import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
  constructor(props) {
    super(props);
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    this.state = { items: items['items'] };
    this.api = localStorage.getItem('api');
    this.key = sessionStorage.getItem('key');
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let products = this.state.items;
    products.map((product) => {
      return axios.post(this.api + '/api/requests/', {
        headers: { 'Authorization': 'Token ' + this.key },
        data: {
          'provider': product.provider,
          'products': [ product.key.id ],
          'estimated': '2018-12-04T12:00:00Z'
        }
      }).then((response) => {
        localStorage.removeItem('cart');
      })
    })
  }
  render() {
    if(this.state.items.length !== 0) {
      let products = this.state.items.map((product) => {
        let p = product.key;
        return (
          <div className="col-md-12" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <div className="row">
                <a className="col-2" value={p.id} href="#product">
                  <img className="card-img-top img-fluid" style={{ width: '25px' }} src={p.photo} alt="Provider"/>
                </a>
                <div className="col-10 text-left">
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
      products.push((
        <div className="col-md-12">
          <button className="btn btn-block btn-success" onClick={this.handleClick}> Fechar pedido com os produtos </button>
        </div>
      ));
      return products;
    } else {
      /* return (
        <div>
          <br/><img className="img-fluid" alt="Drinks" src="./drinks.png"/><br/><br/>
          <h1>Bem-vindo ao Vupit App</h1>
          <p>No momento não há bebidas para você escolher.</p>
        </div>
      ); */
      return (<div/>)
    }
  }
}

export default Cart;

import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ''
    };
    this.key = sessionStorage.getItem('token');
    this.api = localStorage.getItem('api');
  }

  componentDidMount() {
    axios.get(this.api + `/api/stocks/${this.props.location.search}`,{
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let products = response.data.results;
      /* products.map((product) => {
        axios.get(product.key,{
          headers: { 'Authorization': 'Token ' + this.key }
        }).then((response) => {
          return response.data;
        })
      }); */
      this.setState({ products });
    });
  }

  render() {
    if(this.state.products.length !== 0) {
      let products = this.state.products;
      return products.map((product) => {
        return (
          <div className="col-md-4" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <img className="card-img-top" src={product.key} alt="Provider"/>
              <div className="card-body">
                <h5 className="card-title">{product.value}</h5>
                <p className="card-text">{product.quantity}</p>
              </div>
            </div>
          </div>
        );
      })
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

export default Product;

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
        let p = product.key;
        return (
          <div className="col-md-3" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <a style={{ width: '100%' }} href="#product"><img className="card-img-top img-fluid" style={{ width: '30px' }} src={p.photo} alt="Provider"/></a>
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
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

import React, { Component } from 'react';
import axios from 'axios';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ''
    };
    this.key = sessionStorage.getItem('token');
    this.api = this.props.api;
  }

  componentDidMount() {
    axios.get(this.api + '/api/products/',{
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((products) => {
      this.setState({ products });
    });
  }

  render() {
    return (
      <div>
        <br/><img className="img-fluid" alt="Drinks" src="./drinks.png"/><br/><br/>
        <h1>Bem-vindo ao Vupit App</h1>
        <p>No momento não há bebidas para você escolher.</p>
      </div>
    )
    // return (<h1> Hello World at {this.key} on {this.api} </h1>);
  }
}

export default Board;

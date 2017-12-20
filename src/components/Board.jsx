import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
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
        <Menu>
          <a id="beer" className="menu-item text-left" href="/"><h4>Cervejas</h4></a><br/><br/>
          <a id="craft" className="menu-item text-left" href="/"><h4>Artesanais</h4></a><br/><br/>
          <a id="distilled" className="menu-item text-left" href="/"><h4>Destilados</h4></a><br/><br/>
          <a id="sparkling" className="menu-item text-left" href="/"><h4>Espumantes</h4></a><br/><br/>
          <a id="wine" className="menu-item text-left" href="/"><h4>Vinhos</h4></a><br/><br/>
        </Menu>
        <div>
          <br/><img className="img-fluid" alt="Drinks" src="./drinks.png"/><br/><br/>
          <h1>Bem-vindo ao Vupit App</h1>
          <p>No momento não há bebidas para você escolher.</p>
        </div>
      </div>
    )
    // return (<h1> Hello World at {this.key} on {this.api} </h1>);
  }
}

export default Board;

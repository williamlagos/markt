import React, { Component } from 'react';
import drinks from './drinks.png'

class Catalog extends Component {
  render() {
    return (
      <div className="col-md-12">
        <br/><img className="img-fluid" alt="Drinks" src={drinks}/><br/><br/>
        <h1>Bebidas</h1>
        <p>No momento não há bebidas para você escolher.</p>
      </div>
    );
  }
}

export default Catalog;

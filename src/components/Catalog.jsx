import React, { Component } from 'react';

class Catalog extends Component {
  render() {
    return (
      <div class="col-md-12">
        <br/><img className="img-fluid" alt="Drinks" src="./drinks.png"/><br/><br/>
        <h1>Bebidas</h1>
        <p>No momento não há bebidas para você escolher.</p>
      </div>
    );
  }
}

export default Catalog;

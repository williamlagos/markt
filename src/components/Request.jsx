import React, { Component } from 'react';

class Request extends Component {
  render() {
    return (
      <div class="col-md-12">
        <br/><img className="img-fluid" alt="Drinks" src="./drinks.png"/><br/><br/>
        <h1>Pedidos</h1>
        <p>No momento não há pedidos realizados.</p>
      </div>
    );
  }
}

export default Request;

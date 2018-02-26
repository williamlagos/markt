import React, { Component } from 'react';

class Bag extends Component {
  render(){
    return (
      <div className="dropdown show">
        <a role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
          <img alt="bag" src="./bag.png" className="img-fluid" style={{ maxHeight: '30px' }}/>
        </a>
        <div className="dropdown-menu dropdown-menu-right" style={{ right: 0, left: 'inherit' }} aria-labelledby="dropdownMenuLink">
          <h6 className="dropdown-header">Carrinho</h6>
          <a className="dropdown-item" href="#bag">Produtos</a>
          <a className="dropdown-item" href="#clear" onClick={() => localStorage.removeItem('cart')}>Limpar</a>
        </div>
      </div>
    );
  }
}

export default Bag;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bag extends Component {
  render(){
    return (
      <div className="dropdown show">
        <a role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
          <img alt="bag" src="./bag.png" className="img-fluid" style={{ maxHeight: '30px' }}/>
        </a>
        <div className="dropdown-menu dropdown-menu-right" style={{ right: 0, left: 'inherit' }} aria-labelledby="dropdownMenuLink">
          <h6 className="dropdown-header">Carrinho</h6>
          <Link className="dropdown-item" to="/bag">Produtos</Link>
          <a className="dropdown-item" href="#clear" onClick={() => localStorage.removeItem('cart')}>Limpar</a>
        </div>
      </div>
    );
  }
}

export default Bag;

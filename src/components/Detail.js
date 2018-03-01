import React, { Component } from 'react'

/*
Profile rendering
<div className="dropdown-menu dropdown-menu-right" style={{ right: 0, left: 'inherit' }} aria-labelledby="dropdownMenuLink">
  <h6 className="dropdown-header">Perfil</h6>
  <a className="dropdown-item" href="#profile">Visualizar</a>
  <a className="dropdown-item" onClick={(e) => this.logout(e)}href="#logout">Sair</a>
</div>
*/

class Detail extends Component {
  render () {
    return (
      <div className="col-md-12">
        <br/><img className="img-fluid" alt="Drinks" src="./assets/drinks.png"/><br/><br/>
        <h1>Perfil</h1>
        <p>Aqui você controla as informações do seu perfil.</p>
      </div>
    )
  }
}

export default Detail

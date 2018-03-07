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
        <br/><img className="img-fluid" alt="image" src={this.props.image}/><br/><br/>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Detail

import React, { Component } from 'react';

class Profile extends Component {
  render(){
    return (
      <div className="dropdown show">
        <a role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
          <img alt="user" src="./user.png" className="float-right rounded-circle img-fluid" style={{ maxHeight: '30px' }}/>
        </a>
        <div className="dropdown-menu dropdown-menu-right" style={{ right: 0, left: 'inherit' }} aria-labelledby="dropdownMenuLink">
          <h6 className="dropdown-header">Perfil</h6>
          <a className="dropdown-item" href="#profile">Visualizar</a>
          <a className="dropdown-item" href="#logout">Sair</a>
        </div>
      </div>
    );
  }
}

export default Profile;

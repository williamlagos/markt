import React, { Component } from 'react'

/* <div className="dropdown-menu dropdown-menu-right" style={{ right: 0, left: 'inherit' }} aria-labelledby="dropdownMenuLink">
  <h6 className="dropdown-header">Perfil</h6>
  <a className="dropdown-item" href="#profile">Visualizar</a>
  <a className="dropdown-item" onClick={(e) => this.logout(e)}href="#logout">Sair</a>
</div> */

class Profile extends Component {
  logout (event) {
    event.preventDefault()
    sessionStorage.removeItem('token')
    window.location = '/'
  }

  render () {
    return (
      <div className="dropdown show">

      </div>
    )
  }
}

export default Profile

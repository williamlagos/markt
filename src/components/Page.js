import React, { Component } from 'react'

class Page extends Component {
  render () {
    return (
      <div id="login" style={{ background: 'url("./assets/friends.jpg")', backgroundSize: 'cover' }}>
        <form className="form-signin" onSubmit={this.props.submit} style={{ backgroundColor: 'white', borderRadius: '10px' }}>
          <img className="img-responsive rounded" src="./assets/icon.png" alt="Vupit Logo" style={{ maxWidth: '100px' }}/><br/>
          <h1 style={{ fontFamily: 'Roboto Slab' }}>Vupit</h1><br/>
          <input type="text" name="login" className="form-control" onChange={this.props.change} placeholder="E-mail"/>
          <input type="password" name="passw" className="form-control" onChange={this.props.change} placeholder="Senha"/>
          <button className="btn btn-lg btn-default btn-block" onSubmit={this.props.submit} type="submit">Entrar</button>
        </form>
      </div>
    )
  }
}

export default Page

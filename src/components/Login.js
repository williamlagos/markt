import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="form-signin" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <form onSubmit={this.props.submit}>
          <img className="img-responsive rounded" src="./assets/icon.png" alt="Vupit Logo" style={{ maxWidth: '100px' }}/><br/>
          <h1 style={{ fontFamily: 'Roboto Slab' }}>Vupit</h1><br/>
          <input type="text" name="login" className="form-control" onChange={this.props.change} placeholder="Usuário"/>
          <input type="password" name="passw" className="form-control" onChange={this.props.change} placeholder="Senha"/>
          <button className="btn btn-lg btn-default btn-block" style={{ marginBottom: '5px' }} onSubmit={this.props.submit} type="submit">Entrar</button>
        </form>
        <a className="link" onClick={this.props.register}>Criar uma conta</a>
      </div>
    )
  }
}

export default Login

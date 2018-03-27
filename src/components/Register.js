import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div className="form-register" style={{ minWidth: '300px', backgroundColor: 'white', borderRadius: '10px' }}>
        <form>
          <h1 style={{ fontFamily: 'Roboto Slab' }}>Registrar</h1><br/>
          <div className="form-group">
            <input type="text" name="name" className="form-control form-control-start" onChange={this.props.change} placeholder="Nome completo"/>
            <input type="text" name="address" className="form-control" onChange={this.props.change} placeholder="Endereço da entrega"/>
            <input type="text" name="phone" className="form-control" onChange={this.props.change} placeholder="Telefone de contato"/>
            <input type="text" name="email" className="form-control" onChange={this.props.change} placeholder="E-mail para contato"/>
            <input type="text" name="username" className="form-control" onChange={this.props.change} placeholder="Nome de usuário"/>
            <input type="password" name="passw1" className="form-control" onChange={this.props.change} placeholder="Senha do usuário"/>
            <input type="password" name="passw2" className="form-control form-control-end" onChange={this.props.change} placeholder="Repetir senha"/>
          </div>
          <button className="btn btn-lg btn-default btn-block" style={{ marginBottom: '5px' }} onClick={this.props.register} type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Register

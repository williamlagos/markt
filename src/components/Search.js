import React, { Component } from 'react'

class Address extends Component {
  render () {
    return (
      <form className={`form-inline mr-auto ml-auto ${this.props.display}`}>
        <div className="input-group" style={{ minWidth: `${this.props.width}` }}>
          <input type="text" className="form-control" placeholder="Digite seu endereço ou CEP."/>
          <div className="input-group-append">
            <button className={`btn ${this.props.outline}`} style={{ borderRadius: '0 0.25rem 0.25rem 0' }} type="button">Pesquisar</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Address

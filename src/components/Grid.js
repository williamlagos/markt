import React, { Component } from 'react'

class Grid extends Component {
  render () {
    const overflow = { overflow: 'hidden', maxHeight: '200px' }
    const priced = this.props.priced
    const items = this.props.items
    if (items.length === 0) return (<div/>)
    if (!priced) {
      return items.map((item, index) => (
        <div key={index} className="col-md-4" style={{ marginBottom: '5px', marginTop: '5px' }}>
          <div className="card">
            <a style={overflow} href="#" onClick={() => this.props.select(item.user.id)}>
              <img className="card-img-top" src={item.photo} alt="Provider"/>
            </a>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </div>
      ))
    } else {
      return items.map((p, index) => (
        <div key={index} className="col-md-3" style={{ marginBottom: '5px', marginTop: '5px' }}>
          <div className="card">
            <a onClick={() => this.props.addToCart(p)} value={p.id} href="#">
              <img className="img-fluid" style={{ height: '100px', padding: '5px' }} src={p.key.photo} alt="Provider"/>
            </a>
            <div className="text-center">
              <div className="card-body">
                <h5 className="card-title"><strong>R$ {p.value.toFixed(2).replace('.', ',')}</strong></h5>
                <h6>{p.key.name}</h6>
                <p className="card-text">{p.key.description}</p>
              </div>
            </div>
            <div className="card-footer text-muted">
              {p.quantity} em estoque
            </div>
          </div>
        </div>
      ))
    }
  }
}

export default Grid

import React, { Component } from 'react'
// import { string } from 'prop-types'

class List extends Component {
  render () {
    const items = this.props.items
    const brief = this.props.brief
    if (items.length === 0) return (<div/>)
    if (!brief) {
      return items.map((p, index) => (
        <div key={index} className="col-md-12" style={{ marginBottom: '5px', marginTop: '5px' }}>
          <div className="card">
            <div className="row">
              <a className="col-md-2 col-xs-12" onClick={() => this.props.addToCart(p)} value={p.id} href="#product">
                <img className="img-fluid" style={{ height: '100px', padding: '5px' }} src={p.key.photo} alt="Provider"/>
              </a>
              <div className="col-md-10 col-xs-12 text-left">
                <div className="card-body">
                  <h5 className="card-title">{p.key.name}</h5>
                  <p className="card-text">
                    Em estoque: {p.quantity} - <strong>R$ {p.value.toFixed(2).replace('.', ',')}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    } else {
      return items.map((item, index) => {
        return (
          <div key={index} className="col-md-12" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <div className="card-body text-left">
                <a style={{ textDecoration: 'none', color: 'black' }} href="#" onClick={() => this.props.progress(item)}>
                  <p className="card-text">{item.id} - Pedido de {item.provider.name} </p>
                </a>
              </div>
            </div>
          </div>
        )
      })
    }
  }
}

List.propTypes = {
  // items: string
}

export default List

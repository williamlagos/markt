import React, { Component } from 'react'
// import { string } from 'prop-types'

/*
Request rendering
<div key={index} className="col-md-12" style={{ marginBottom: '5px', marginTop: '5px' }}>
  <div className="card">
    <div className="card-body text-left">
      <h6 className="card-text">Pedido {request.id}</h6>
    </div>
  </div>
</div>

Bag rendering
<div className="col-md-12" style={{ marginBottom: '5px', marginTop: '5px' }}>
  <div className="card">
    <div className="row">
      <a className="col-2" value={p.id} href="#product">
        <img className="card-img-top img-fluid" style={{ width: '25px' }} src={p.photo} alt="Provider"/>
      </a>
      <div className="col-10 text-left">
        <div className="card-body">
          <h5 className="card-title">{p.name}</h5>
          <p className="card-text">{p.description}</p>
        </div>
      </div>
    </div>
  </div>
</div>
*/

class List extends Component {
  render () {
    const overflow = {
      overflow: 'hidden',
      maxHeight: '250px'
    }
    const items = this.props.items
    if (items.length === 0) return (<div/>)
    return items.map((item, index) => (
      <div key={index} className="col-md-4" style={{ marginBottom: '5px', marginTop: '5px' }}>
        <div className="card">
          <a href="#" style={overflow} onClick={() => this.access('product', `/product?provider=${item.user.id}`)}>
            <img className="card-img-top" src={item.photo} alt="Provider"/>
          </a>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{item.address}</small>
          </div>
        </div>
      </div>
    ))
  }
}

List.propTypes = {
  // items: string
}

export default List

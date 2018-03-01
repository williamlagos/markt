import React, { Component } from 'react'

class Grid extends Component {
  render () {
    const overflow = {
      overflow: 'hidden',
      maxHeight: '250px'
    }
    const items = this.props.items
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

export default Grid

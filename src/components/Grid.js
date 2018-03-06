import React, { Component } from 'react'

class Grid extends Component {
  render () {
    const overflow = {
      overflow: 'hidden',
      maxHeight: '200px'
    }
    const items = this.props.items
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
  }
}

export default Grid

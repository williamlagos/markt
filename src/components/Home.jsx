import React, { Component } from 'react';

class Home extends Component {
  render() {
    if(this.props.providers.length !== 0) {
      let providers = this.props.providers;
      return providers.map((provider, index) => {
        return (
          <div key={index} className="col-md-4" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <a href="#/product?provider={{provider.user.id}}"><img className="card-img-top" src={provider.photo} alt="Provider"/></a>
              <div className="card-body">
                <h5 className="card-title">{provider.name}</h5>
                <p className="card-text">{provider.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{provider.address}</small>
              </div>
            </div>
          </div>
        )
      });
    } else {
      /* return (
        <div>
          <br/><img className="img-fluid" alt="Drinks" src="./drinks.png"/><br/><br/>
          <h1>Bem-vindo ao Vupit App</h1>
          <p>No momento não há bebidas para você escolher.</p>
        </div>
      ); */
      return (<div/>)
    }
  }
}

export default Home;

import React, { Component } from 'react';
import axios from 'axios';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = { requests: '' }
    this.key = sessionStorage.getItem('token');
    this.api = localStorage.getItem('api');
  }

  componentDidMount() {
    axios.get(this.api + '/api/requests/',{
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let requests = response.data.results;
      this.setState({ requests });
    });
  }

  render() {
    if(this.state.requests.length !== 0) {
      let requests = this.state.requests;
      return requests.map((request) => {
        return (
          <div className="col-md-12" style={{ marginBottom: '5px', marginTop: '5px' }}>
            <div className="card">
              <div className="card-body text-left">
                <h6 className="card-text">Pedido {request.id}</h6>
              </div>
            </div>
          </div>
        );
      })
    } else {
      return (<div/>);
    }
  }
}

export default Request;
import React, { Component } from 'react';
import Catalog from './Catalog.jsx';
import Request from './Request.jsx';
import Product from './Product.jsx';
import Home from './Home.jsx';
import Cart from './Cart.jsx';
import axios from 'axios';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: ''
    };
    this.key = sessionStorage.getItem('token');
    this.api = this.props.url;
  }

  componentDidMount() {
    axios.get(this.api + '/api/profiles/?side=2',{
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((response) => {
      let providers = response.data.results;
      this.setState({ providers });
    });
  }

  render() {
    switch(this.props.change) {
      case 'bag': return (<Cart url={this.props.url}/>);
      case 'catalog': return (<Catalog url={this.props.url}/>);
      case 'request': return (<Request url={this.props.url}/>);
      case 'product': return (<Product url={this.props.url} data={this.props.data}/>);
      default: return (<Home navigate={(choice, data) => this.props.navigate(choice, data)} providers={this.state.providers}/>);
    }
  }
}

export default Board;

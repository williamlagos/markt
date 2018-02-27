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
    this.api = localStorage.getItem('api');
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
      case 'bag': return (<Cart/>);
      case 'catalog': return (<Catalog/>);
      case 'request': return (<Request/>);
      case 'product': return (<Product data={this.props.data}/>);
      default: return (<Home navigate={(choice, data) => this.props.navigate(choice, data)} providers={this.state.providers}/>);
    }
  }
}

export default Board;

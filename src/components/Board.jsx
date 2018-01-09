import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
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
    return (
      <div className="container-fluid">
        <div className="row">
          <Switch>
            <Route exact path='/' render={()=><Home providers={this.state.providers}/>}/>
            <Route path='/bag' component={Cart}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/request' component={Request}/>
            <Route path='/product' component={Product}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Board;

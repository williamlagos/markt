import React, { Component } from 'react';
// import { slide as Menu } from 'react-burger-menu';
import { Switch, Route } from 'react-router-dom'
import Catalog from './Catalog.jsx';
import Home from './Home.jsx';
import axios from 'axios';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ''
    };
    this.key = sessionStorage.getItem('token');
    this.api = this.props.api;
  }

  componentDidMount() {
    axios.get(this.api + '/api/products/',{
      headers: { 'Authorization': 'Token ' + this.key }
    }).then((products) => {
      this.setState({ products });
    });
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Catalog}/>
            <Route path='/discover' component={Catalog}/>
            <Route path='/requests' component={Catalog}/>
          </Switch>
        </div>
      </div>
    )
    // return (<h1> Hello World at {this.key} on {this.api} </h1>);
  }
}

export default Board;

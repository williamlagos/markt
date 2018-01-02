import React, { Component } from 'react';
// import { slide as Menu } from 'react-burger-menu';
import { Link, Switch, Route } from 'react-router-dom'
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
            <Route path='/beer' component={Catalog}/>
            <Route path='/craft' component={Catalog}/>
            <Route path='/distilled' component={Catalog}/>
            <Route path='/sparkling' component={Catalog}/>
            <Route path='/wine' component={Catalog}/>
          </Switch>
        </div>
      </div>
    )
    // return (<h1> Hello World at {this.key} on {this.api} </h1>);
  }
}

export default Board;

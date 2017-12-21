import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
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
        <Menu>
          <Link to="/beer" className="menu-item text-left"><h4>Cervejas</h4></Link><br/><br/>
          <Link to="/craft" className="menu-item text-left"><h4>Artesanais</h4></Link><br/><br/>
          <Link to="/distilled" className="menu-item text-left"><h4>Destilados</h4></Link><br/><br/>
          <Link to="/sparkling" className="menu-item text-left"><h4>Espumantes</h4></Link><br/><br/>
          <Link to="/wine" className="menu-item text-left"><h4>Vinhos</h4></Link><br/><br/>
        </Menu>
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

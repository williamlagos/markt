import React, { Component } from 'react';
import Login from '../Login.jsx';
import Board from '../Board.jsx';
import Navbar from '../Navbar.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: sessionStorage.getItem('token') || null };
  }

  render() {
    const url = 'http://vupit.efforia.io';
    if (this.state.token === null) {
      return <Login api={url} authenticate={this.activate}/>;
    } else {
      return (
        <div>
          <Navbar/>
          <Board api={url} token={this.state.token}/>
        </div>
      );
    }
  }

  activate = (token) => {
    sessionStorage.setItem('token',token);
    this.setState({ token });
  }
}

export default App;

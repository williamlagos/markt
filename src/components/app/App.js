import React, { Component } from 'react';
import Login from '../Login.jsx';
import Board from '../Board.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: sessionStorage.getItem('token') || null };
  }

  render() {
    const url = process.env.API || 'http://127.0.0.1:8000';
    if (this.state.token === null) {
      return <Login api={url} authenticate={this.activate}/>;
    } else {
      return <Board api={url} token={this.state.token}/>;
    }
  }

  activate = (token) => {
    sessionStorage.setItem('token',token);
    this.setState({ token });
  }
}

export default App;

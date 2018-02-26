import React, { Component } from 'react';
import Login from './Login.jsx';
import Board from './Board.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem('token') || null,
      board: 'default'
    };
  }

  render() {
    localStorage.setItem('api','http://vupit.efforia.io');
    if (this.state.token === null) {
      return <Login authenticate={this.login}/>;
    } else {
      return (
        <div>
          <Navbar navigate={this.route}/>
          <div className="container-fluid">
            <div className="row">
              <Board change={this.state.board}/>
            </div>
          </div>  
        </div>
      );
    }
  }

  login = (token) => {
    sessionStorage.setItem('token',token);
    this.setState({ token });
  }

  route = (board) => {
    this.setState({ board });
  }
}

export default App;

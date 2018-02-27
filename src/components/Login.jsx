import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passw: '',
      login: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const api = this.props.api
    axios.post(api + '/api/auth/token/', {
      username: this.state.login,
      password: this.state.passw
    })
    .then((result) => {
      console.log('Submitted')
      this.props.authenticate(result.data.token)
    })
    .catch((error) => {
      console.log(error)
      if (error.response.status === 401) alert('Unauthorized');
    });
    event.preventDefault();
  }

  handleChange(event) {
    const name = event.target.name;
    const vals = event.target.value;
    this.setState({ [name]: vals });
  }

  render() {
    return (
      <div id="login" style={{ background: 'url("./assets/friends.jpg")', backgroundSize: 'cover' }}>
        <form className="form-signin" onSubmit={this.handleSubmit} style={{ backgroundColor: 'white', borderRadius: '10px' }}>
          <img className="img-responsive rounded" src="./assets/icon.png" alt="Vupit Logo" style={{ maxWidth: '100px' }}/><br/>
          <h1 style={{ fontFamily: 'Roboto Slab' }}>Vupit</h1><br/>
          <input type="text" name="login" className="form-control" value={this.state.login} onChange={this.handleChange} placeholder="E-mail"/>
          <input type="password" name="passw" className="form-control" value={this.state.passw} onChange={this.handleChange} placeholder="Senha"/>
          <button className="btn btn-lg btn-default btn-block" onSubmit={this.handleSubmit} type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;

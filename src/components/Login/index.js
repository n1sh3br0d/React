import React, { Component } from 'react';

import AlertDanger from '../AlertDanger';


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false,
      email: '',
      password: ''
    }
  }

 
  handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/users/signin', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       email: this.state.email,
       password: this.state.password
      })
     }).then(response => {
       console.log(response)
      if (response.status === 401) {
        this.setState({email: '', password: '', error: true})
        localStorage.clear();
      } 
      if (response.ok) {
        return response.json();
      }
     })
    .then(data => {
      localStorage.setItem('api-key', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      this.props.auth(data.token, JSON.parse(localStorage.getItem('user')));
    })
    .catch(error => {
      console.log(error);
    });
    
  }


  render(){
    let error;
    if (this.state.error) {
      error = <AlertDanger text='Invalid value'/>
    }
    return(
      <form onSubmit = {this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputEmail">Email address</label>
          <input type="email" className="form-control" id="InputEmail" value = {this.state.email} aria-describedby="emailHelp" placeholder="Enter email"
          onChange = {(e) => this.setState({email: e.target.value, error: false})}/>
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword">Password</label>
          <input type="password" className="form-control" id="InputPassword" value = {this.state.password} placeholder="Password"
          onChange = {(e) => this.setState({password: e.target.value, error: false})}/>
        </div>
        {error}
        <button type="submit" className="btn btn-primary float-right">Submit</button>
      </form>
    );
  }
}

export default Login;
import React, { Component } from 'react';

import AlertDanger from '../AlertDanger';
import Form from '../Form';


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValue = this.getValue.bind(this);
    this.state = {
      error: false,
      email: '',
      password: ''
    }
  }

  getValue(par,value) {
    this.setState({par: value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email , this.state.password);
    fetch('http://localhost:3001/users/signin', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       email: this.state.email,
       password: this.state.password
      })
     }).then(response => {
       if (response.ok) {
        return response.json()
      } else {
        this.setState({email: '', password: ''})
      }})
    .then(data => {
      console.log(data);
      localStorage.setItem('api-key', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      this.props.auth(data.token, JSON.parse(localStorage.getItem('user')));
    })
    .catch(error => console.error(error));
    
  }

  

  render(){
    let error;
    if (this.state.error) {
      error = <AlertDanger text='Invalid value'/>
    }
    return(
      <React.Fragment>
        <Form submit = {this.handleSubmit} inputs = {this.state} changeValue = {this.getValue} />
      </React.Fragment>
    );
  }
}

export default Login;
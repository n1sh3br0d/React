import React, { Component } from 'react';

import AlertDanger from '../AlertDanger';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false,
      email: '',
      password: '',
      password2: '',
      firstName: '',
      lastName: ''
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    if(this.state.password !== this.state.password2) {
      this.setState({password: '', password2: '', error: true});
      return false;
    }

    fetch('http://localhost:3001/users/signup', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       email: this.state.email,
       password: this.state.password2,
       name: { 
         firstName: this.state.firstName,
         lastName: this.state.lastName
       }
      })
     }).then(response => {
       if (response.ok) {
        return response.json()
      } else {
        console.log(response)
        this.setState({email: '', password: '', error: true})
      }})
    .then(data => {
      console.log(data);
      localStorage.setItem('api-key', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    })
    .catch(error => console.error(error));
    
  }

  

  render(){
    let error
    if (this.state.error) {
      error = <AlertDanger text='Invalid value'/>
    }
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>Name</label>
        <div className="row">
          <div className="col">
            <input type="text" value = {this.state.firstName} className="form-control" placeholder="First name"
            onChange = {(e) => this.setState({firstName: e.target.value, error: false})}/>
          </div>
          <div className="col">
            <input type="text" value = {this.state.lastName} className="form-control" placeholder="Last name"
            onChange = {(e) => this.setState({lastName: e.target.value, error: false})}/>
          </div>
        </div>
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
        <div className="form-group">
          <label htmlFor="InputPassword2">Repeat Password</label>
          <input type="password" className="form-control" id="InputPassword2" value = {this.state.password2} placeholder="Repeat Password"
          onChange = {(e) => this.setState({password2: e.target.value, error: false})}/>
        </div>
        {error}
        <button type="submit" className="btn btn-primary float-right">Create User</button>
      </form>
    )
  }
}


export default Register;
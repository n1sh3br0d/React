import React, { Component } from 'react';

class Input extends Component{

  render(){
    return(
      <React.Fragment>
        <label htmlFor="InputEmail">Email address</label>
        <input type="email" className="form-control" id="InputEmail" value = {this.props.value} aria-describedby="emailHelp" placeholder="Enter email"
          onChange = {(e) => this.props.change(this.props.e.target.value)}/>
      </React.Fragment>
    );
  }
}


export default Input;
import React, { Component } from 'react';

import checkLevel from '../hoc/checkLevel';
import AlertDanger from '../AlertDanger';


class ChangePassword extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false,
      newPassword: '',
      newPassword2: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.newPassword !== this.state.newPassword2){
      this.setState({newPassword2: '', newPassword2: '', error: true})
      return false
    }
    this.props.submit({password: this.state.newPassword2});
  }


  render(){
    console.log(this.state.newPassword);
    console.log(this.state.newPassword2);
    let error
    if (this.state.error) {
      error = <AlertDanger text='Invalid value'/>
    }
    return(
      <React.Fragment>
        <div className="row">
        <div className="col">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="col">
              <input className="float-left" type="password" className="form-control" placeholder = "New password"
                value={this.state.newPassword}
                onChange={(e) => this.setState({newPassword: e.target.value, error: false})}/>
            </div>
            <div className="col">
              <input className="float-left" type="password" className="form-control" placeholder = "Repat password"
                value={this.state.newPassword2}
                onChange={(e) => this.setState({newPassword2: e.target.value, error: false})}/>
            </div>
            <button type="submit" className="btn btn-primary btn-sm float-left">Submit</button>
          </form>
        </div>
        {error}
        </div>
      </React.Fragment> 
    );
  }
}

export default checkLevel(ChangePassword);
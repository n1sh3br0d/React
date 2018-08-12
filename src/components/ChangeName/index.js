import React, { Component } from 'react';

import checkLevel from '../hoc/checkLevel';
import AlertDanger from '../AlertDanger';


class ChangeName extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false,
      name: {
        firstName: '',
        lastName: ''
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.name.firstName || !this.state.name.lastName) {
      this.setState({name: {firstName: '', lastname: ''}, error: true})
      return false;
    }
    this.props.submit({name: this.state.name});
  }

  render(){
    let error;
    if (this.state.error) {
      error = <AlertDanger text='Invalid value'/>;
    }
    return(
      <React.Fragment>
        <div className="row">
        <div className="col">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="col">
              <input className="float-left" placeholder = "First Name"
                value={this.state.name.firstName} 
                onChange={(e) => this.setState({name: { firstname: e.target.value}, error: false})}/>
            </div>
            <div className="col">
              <input className="float-left" placeholder = "Last Name"
                value={this.state.name.lastName} 
                onChange={(e) => this.setState({name: { lastname: e.target.value}, error: false})}/>
            </div>
            <button type="submit" className="btn btn-primary btn-sm float-left">Submit</button>
          </form>
          {error}
        </div>
        </div>
      </React.Fragment> 
    );
  }
}

export default checkLevel(ChangeName);
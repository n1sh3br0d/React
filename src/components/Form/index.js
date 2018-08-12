import React, { Component } from 'react';

import AlertDanger from '../AlertDanger';
import Input from '../Input';

class Form extends Component {
  render(){
    return(
      <form onSubmit = {this.props.submit}>
        {this.props.inputs.forEach(value => {
          console.log(value);
            return(
              <div className="form-group">
                <Input value = {value} change = {this.props.changeValue}/>
              </div>
            )             
        })}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

}

export default Form;
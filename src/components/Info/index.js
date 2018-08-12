import React, {Component} from 'react';
import checkLevel from '../hoc/checkLevel';

class Info extends Component {
  render() {
    return(
      <div className='border container'>
        <div className="row">
          <div className="col">
            <p className="float-right font-weight-bold">{this.props.dataUser.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <p className="text-uppercase float-left">{this.props.dataUser.name.firstName}</p>
          </div>
          <div className="col-2">
            <p className="text-uppercase float-left">{this.props.dataUser.name.lastName}</p>
          </div>          
        </div>
        <div className="container">
          <p>Orders</p>
        </div>
      </div>
    )
  }
}

export default checkLevel(Info);
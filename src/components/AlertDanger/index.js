import React, { Component } from 'react';

class AlertDanger extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="alert alert-danger" role="alert">
          {this.props.text}
        </div>
      </React.Fragment>
    )
  }
}

export default AlertDanger;
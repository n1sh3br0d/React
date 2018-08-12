import React, {Component} from 'react';
import './main.css';


class ChatIcon extends Component {
  render(){
    return(
      <React.Fragment>
        <a role='button' onClick={this.props.click} className="position-fixed mail-icon btn btn-dark">
          <span id='mail-icon' className="text-white text-uppercase font-weight-bold glyphicon">&#x2709;</span> 
        </a>
      </React.Fragment>
    );
  }
}

export default ChatIcon;
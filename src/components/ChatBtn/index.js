import React, { Component } from 'react';

class ChatBtn extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button className={`btn btn-outline-primary btn-sm ${this.props.active === this.props.item ? 'active': ''}`} 
        value={this.props.item} 
        onClick = {(e) => this.props.click(e.target.value)}>{this.props.item}
        <span className="badge badge-primary badge-pill"></span>
      </button>
    );
  }
}

export default ChatBtn;
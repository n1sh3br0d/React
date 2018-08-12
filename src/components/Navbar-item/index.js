import React, { Component } from 'react';

import './main.css';

class Navbar_item extends Component{

  render(){
    return(
      <React.Fragment>
         <li className= {`nav-item nav-main ${(this.props.activeNI === this.props.item) ? 'active' : '' }`}>
              <a className="nav-link " role='button' onClick={() => this.props.click(this.props.item)}>{this.props.item}</a>
        </li>
      </React.Fragment>
    );
  }
}


export default Navbar_item;
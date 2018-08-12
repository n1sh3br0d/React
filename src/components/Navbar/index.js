import React, { Component } from 'react';

import Navbar_item from '../Navbar-item';

class Navbar extends Component{

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.activeNI !== nextProps.activeNI);
  }


  render(){
    return (
      <React.Fragment>
        <span className="navbar-brand mb-0 h1">{this.props.name}</span>
          <ul className="nav justify-content-center">
            {this.props.items.map(item => {
              return(<Navbar_item item = {item} 
                key = {item} 
                click = {this.props.click}
                activeNI = {this.props.activeNI} 
                />
              )
              })}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      </React.Fragment>
    )}
}


export default Navbar;
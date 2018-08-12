import React, { Component } from 'react';

import checkLevel from '../hoc/checkLevel';
import ListGroup from '../ListGroup';
import Settings from '../Settings';
import ModerChat from '../ModerChat';
import './main.css';



class Acc extends Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
    this.state = {
      active: this.props.activeLG || 'Settings'
    }
  }

  handleView(active){
    this.setState({active});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.active !== nextState.active);
  }

  render(){
    let items = ['Settings','Orders'];
    if (this.props.dataUser.level === 3) {
      items.push('Users');
    } 
    if (this.props.dataUser.level === 2) {
      items.push('Chat');
    }
    let view;
    if (this.state.active === 'Settings') {
      view = <Settings {...this.props}/>;
    } else if (this.state.active === 'Chat') {
      view = <ModerChat {...this.props}/>;
    }


    return(  
      <div className='beautify-line position-absolute w-75 h-75'>
      <div className='row second-try'>
        <div className='col-2'>
          <ListGroup activeLG={this.state.active} items={items} click={this.handleView}/>
        </div>
        <div className='col'>
            <div className='border container h-100'>
              <div className="row">
                <div className="col">
                  <p className="float-right font-weight-bold">{this.props.dataUser.email}</p>
                </div>
              </div>
              <div className='row'>
                <h2>{this.props.dataUser.name ? 
                  `${this.props.dataUser.name.firstName} ${this.props.dataUser.name.lastName}` : ''}</h2>
              </div>
              {view}
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default checkLevel(Acc);
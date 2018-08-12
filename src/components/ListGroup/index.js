import React, {Component} from 'react';

class ListGroup extends Component {
  render(){
    return(
      <div className="list-group">
        {this.props.items.map(item => {
          return(
            <button type='button' 
              className={`list-group-item list-group-item-action ${this.props.activeLG === item ? 'active' : ''}`}  
              key = {item} 
              onClick= {() => this.props.click(item)}>
                {item}
            </button>
          );
          })}
      </div>
    )
  }
}

export default ListGroup;
import React, { Component } from 'react';

class BtnGroup extends Component {

  render(){
    return(
      <React.Fragment>
        <div className="btn-group" role="group">
          {this.props.items.map(item => {
                  return(<button type='button' className="btn btn-secondary"  
                    key = {item} 
                    onClick= {() => this.props.click(item)}>
                    {item}
                    </button>
                  )
                  })}
        </div>
      </React.Fragment>
    )  
  }
}

export default BtnGroup;
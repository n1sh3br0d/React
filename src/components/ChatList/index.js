import React, {Component} from 'react';
import ModerChatWindow from '../ModerChatWindow';

class ChatList extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return(this.props.active !== nextProps.active ||
       this.props.newMessage !== nextProps.newMessage ||
       this.state.active !== nextState.active);
  }

  render(){
    let view = <ModerChatWindow send={this.props.send} newMessage={this.props.newMessage} messages={this.props.messages} active={this.state.active}/>
    let users = new Set();
    this.props.messages.map((message, i) => {
      if (message.channel === this.props.active) {
        users.add(message.from);
      }
    });

    return(
        <div className='row h-100'>
          <div className='col-4'>
            <div className="list-group">
              {[...users].map((user, i) => {
                return(
                  <a key={i} role='button' className={`list-group-item d-flex justify-content-between btn-sm ${this.state.active === user ? 'active': '' }`} 
                    onClick={() => this.setState({active: user})}>
                    {user}
                    <span className="badge badge-success badge-pill">2</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className='col-8'>
            {view}
          </div>
        </div>
    );
  }
} 

export default ChatList;
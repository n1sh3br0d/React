import React, {Component} from 'react';

import { socket, messages, SendPM } from '../../socket'
import ChatBtn from '../ChatBtn';
import ChatList from '../ChatList';


class ModerChat extends Component{
  constructor(props){
    super(props);
    this.sendMessage = SendPM.bind(this);
    this.handleView = this.handleView.bind(this);
    this.state = { 
      active: 'Guests',
      newMessage: '',
      unread: 0
     }
  }

  handleView(active){
    this.setState({active});
  }


  componentDidMount() {
  socket.on('message', message => {
    const data = JSON.parse(message)
    this.setState({newMessage: data });
  });
  }

  shouldComponentUpdate(nextProps,nextState){    
    return(this.state.newMessage !== nextState.newMessage || this.state.active !== nextState.active);
  }

  render(){
    let items = ['Guests','Logged'];

    return(
      <div className="container h-100">
        <div className='row'>
            {items.map((item,i) => {
              return(
                <ChatBtn key={i} item={item} active={this.state.active} click={this.handleView}/>
              );
            })}
        </div>
        {this.state.active ? 
          <ChatList messages={messages} active={this.state.active} 
            newMessage={this.state.newMessage} send={this.sendMessage}/> : ''}
      </div>
    );    
  }
}

export default ModerChat;
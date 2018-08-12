import React, {Component} from 'react';

import { socket, messages, Send, SendPM} from '../../socket';
import ChatWindow from '../ChatWindow';
import ChatIcon from '../ChatIcon';


class Chat extends Component {
  constructor(props){
  super(props);
  this.sendMessage = Send.bind(this);
  this.setActive = this.setActive.bind(this);
  this.socket = socket;
  this.messages = messages;
  this.state = { 
    active: false,
    newMessage: {}
   }
  }

  setActive(){
    this.setState({active: !this.state.active});
  }



  componentDidMount(){
    socket.on('message', message => {
      const data = JSON.parse(message);
      if (data.from !== 'Server') {
        this.sendMessage = SendPM.bind(this);
      }
      this.setState({active: true, newMessage: data});
    });
  }

  shouldComponentUpdate(nextProps,nextState){    
    return(this.state.newMessage !== nextState.newMessage || this.state.active !== nextState.active);
  }

  render(){
    console.log('render chat');
    let view;
    if(this.state.active){
        view = <ChatWindow messages={this.messages} click={this.setActive}
        newMessage={this.state.newMessage} send={this.sendMessage}/>
    } else {
        view = <ChatIcon click={this.setActive}/>
    }
    return(
        <React.Fragment>
            {view}
        </React.Fragment>
    );
  }
}

export default Chat;
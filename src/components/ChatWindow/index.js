import React, {Component} from 'react';

import './main.css';

class ChatWindow extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.send({msg: this.state.message},this.props.newMessage.from);
    this.setState({message: ''});
  }

  shouldComponentUpdate(nextProps,nextState){
    return(this.props.newMessage !== nextProps.newMessage || this.state.message !== nextState.message);
  }

  render(){
    console.log('render window');
    console.log(this.props.newMessage);
    let view;
    if (this.props.messages) {
      view = this.props.messages.map((item,i) => {
        return(
          <div key={i} className="row">
            <div className="col">
              <div className={`message-item inline-block ${item.from === 'me' ? 'float-right': 'float-left'}`}>
                  <p className='d-flex'>{item.msg}</p>
                  <small className="float-right">{item.from}</small>
              </div>
            </div>
          </div>
        )
      });
    }

    return(
      <React.Fragment>
        <div className="position-fixed container chat">
          <div className="bg-dark chat-header" >
            <button type="button" onClick={this.props.click} className="close" aria-label="Close">
                <span className="text-white" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="chat-window container" id='messages-area'>
            {view}
          </div>
          <div className="chat-input">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Write Message" 
                    value={this.state.message} onChange={e => this.setState({message: e.target.value})} />
                <div className="input-group-append">
                    <button className="btn btn-primary"  type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatWindow;
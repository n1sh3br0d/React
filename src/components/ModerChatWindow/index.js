import React, {Component} from 'react';
import './main.css'

class ModerChatWindow extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.send({msg: this.state.message},this.props.active);
    this.setState({message: ''});
  }

  shouldComponentUpdate(nextProps,nextState){
    return(this.props.active !== nextProps.active || 
      this.state.message !== nextState.message || 
      this.props.newMessage !== nextProps.newMessage);
  }

  render(){
    let view;
    if (this.props.messages) {
      view = this.props.messages.map((message,i) => {
        if (message.from === this.props.active || message.from === 'me'){
          return(
            <div key={i} className="row">
              <div className="col">
                <div className={`message-item inline-block ${message.from === 'me' ? 'float-right': 'float-left'}`}>
                    <p className='d-flex'>{message.msg}</p>
                    <small className="float-right">{message.from}</small>
                </div>
              </div>
            </div>
          );
        }
      });
    }

    return(
      <div className = 'container h-75'>
        <div className = 'moder-chat-messages container h-75'>
          {view}
        </div>
        <form  onSubmit={e => this.handleSubmit(e)}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Write message" 
                value={this.state.message} onChange={e => this.setState({message: e.target.value})} />
            <div className="input-group-append">
                <button className="btn btn-primary"  type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ModerChatWindow;
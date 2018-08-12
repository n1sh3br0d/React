import React, {Component} from 'react';
import ChangePassword from '../ChangePassword';
import ChangeName from '../ChangeName';

class Settings extends Component {
  constructor(props){
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
    this.state = {
      active : ''
    }
  }

  handleView(active){
    if (this.state.active === active){
      this.setState({active : ''});
    } else {
      this.setState({active});
    }
  }

  updateInfo(param){
    console.log(param)
    fetch(`http://localhost:3001/users/${this.props.dataUser._id}`, {
      method: 'PATCH',
      headers: {'Accept': 'application/json',
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.props.apiKey}`},
      body: JSON.stringify(param),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    let view;
    if (this.state.active === 'ChangePassword') {
      view = <ChangePassword {...this.props} submit={this.updateInfo}/>
    } else if (this.state.active === 'ChangeName') {
      view = <ChangeName {...this.props} submit={this.updateInfo}/>
    }

    return(
      <div className="container">
        <div className="row">
          <button className="btn btn-outline-primary btn-sm" value="ChangePassword" 
            onClick = {(e) => this.handleView(e.target.value)}>Change Password</button>
          <button className="btn btn-outline-primary btn-sm" value="ChangeName" 
            onClick = {(e) => this.handleView(e.target.value)}>Change Name</button>
        </div>
        {view}
      </div>
    );
  }
}

export default Settings;
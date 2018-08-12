import React,{Component} from 'react';

import Login from '../Login';
import Register from '../Register';
import './main.css'
import BtnGroup from '../BtnGroup';

function checkLevel(WrapedComponent) {
  const items = ['Login','Register']

  return class CheckLevel extends Component {
    constructor(props){
      super(props);
      this.getApi = this.getApi.bind(this);
      this.handleView = this.handleView.bind(this);
      this.state = {
        active: this.props.activeBG || 'Login',
        auth : localStorage.getItem('api-key'),
        user: JSON.parse(localStorage.getItem('user'))
      }
    }

    getApi(auth, user){
      this.setState({auth, user})
    }

    handleView(active){
      this.setState({active});
    }

    shouldComponentUpdate(nextProps, nextState) {
      return (this.state.auth !== nextState.auth || this.state.active !== nextState.active);
    }

    render() {
      let view;
      if (this.state.active === 'Login') {
        view = <Login auth = {this.getApi}/>;
      } else if (this.state.active === 'Register') {
        view = <Register/>;
      }
      if (this.state.auth) {
        if (this.props.apiKey && this.props.dataUser) {
          return(<WrapedComponent {...this.props} />);
        } else {
          return(<WrapedComponent {...this.props} apiKey = {this.state.auth} dataUser = {this.state.user} />);
        }
        
      } else {        
        return(
          <React.Fragment>        
            <div className='row justify-content-center margin-row'>
              <div className='col-auto'>
                <BtnGroup items = {items} click = {this.handleView}/> 
              </div> 
            </div>
            <div className='row justify-content-center margin-row'>
              <div className='col-auto'>
                {view}
              </div>   
            </div>
          </React.Fragment>  
        );
      }
    }
  }
}

export default checkLevel;
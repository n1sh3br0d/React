import React, { Component } from 'react';
import Navbar from '../Navbar'
import ReactDOM from 'react-dom';
import Card from '../Card';
import Acc from '../Acc';
import Chat from '../Chat';
//import logo from './logo.svg';
//import './App.css';

const nav = document.getElementById("nav");

const navTittle = 'Demo React Shop';
const items = ['Products','Acc'];



class App extends Component {
  constructor(props){
    super(props);
    this.handleView = this.handleView.bind(this);
    
    this.state = {
      active: this.props.activeNav || 'Products'
    }
  }

  handleView(active){
    this.setState({active});
  }

  render() {
    let view;
    let chat = ReactDOM.createPortal(< Chat />,document.body);
    if (this.state.active === 'Products') {
      view = <Card/>;
    } else if (this.state.active === 'Acc'){
      view = <Acc/>;
    }
    let checklevel = JSON.parse(localStorage.getItem('user'));
    if (checklevel && checklevel.level > 1) {
      chat = '';
    }
    return (
      <div className='container'>
        {ReactDOM.createPortal(<Navbar name = {navTittle} items = {items} activeNI = {this.state.active} click = {this.handleView}/>,nav)} 
        {chat}
          {view}
      </div>
    );
  }
}

export default App;

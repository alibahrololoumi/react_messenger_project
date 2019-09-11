import React from 'react';
import logo from './logo.svg';
import './App.css';
import logopic from './logoe.JPG'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from './commponent/signin.js';
import Signup from './commponent/signup.js';
import Home from './commponent/home.js';
import Messenger from './commponent/messenger.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import aliAghaBahrol from './reducer/scan.js';


const store = createStore(aliAghaBahrol)




export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <Router>

      <Route path="/" exact component={Home} />
        <Route path="/signin/" component={Signin} />
        <Route path="/Signup/" component={Signup} />
        <Route path="/Messenger/" component={Messenger} />
         


        </Router>
        
        </Provider>



    )

  }


}
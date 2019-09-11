import React from 'react';
import logopic from '../logoe.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";






export default class Home extends React.Component{
  render(){
    return(
        <div className='contain'>
          <div> <img src={logopic} alt=""  className='logoo' /> </div> 
          
          <Link to='/Signin'><button className='bottomHome'>signin</button></Link>

          <Link to='/Signup'><button className='bottomHome'>signup</button></Link>
          
          
          </div>



    )

  }


}
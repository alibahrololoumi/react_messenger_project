import React from 'react';
import logopic from '../logoe.JPG'
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios'
import { withRouter } from "react-router";




export default class Signup extends React.Component{
  constructor(){
    super()
    this.state = {
        email:'',
        password:''
    }
  }
  handelePasword(event){
    this.setState({password: event.target.value})
  }
  handeleEmail(event){
    this.setState({email: event.target.value})
  }

  handleRequest () {
    
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password
      })
        .then(function (response) {
          console.log('data:', response.data)
          window.localStorage.setItem('token', response.data.token)
        })
        .catch(function (error) {
          console.log(error)
        })
    
  }

  

  render(){
    
    return(
        <div className='contain'>
          <div> <img src={logopic} alt=""  className='logoo' /> </div> 
          <input type="text" placeholder='email' className='s' onChange={(event) =>this.handeleEmail(event)}/>
          <input type="password" placeholder='password' className='s' onChange={(event)=>this.handelePasword(event)}/>
          <Link to='/Messenger'><button className='bottomHome '>next</button></Link>
          <button className='bottomHome' onClick={()=>this.handleRequest()}>submit</button>
          
          </div>



    )

  }


}
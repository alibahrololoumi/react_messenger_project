import React from 'react';
import logopic from '../logoe.JPG'
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios'


export default class Signin extends React.Component{
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
  handleEveryThing(event){
    let name =event.target.name
    let changeFields =this.state.changeFields
    changeFields[name] = event.target.value
    this.setState({fields: changeFields})
  }
  handleRequest () {
    console.log('eeee',this.state.email)
        console.log('pppp',this.state.password)
    axios.post('https://api.paywith.click/auth/signin/', {
      
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        
        console.log('data:', response.data)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id',response.data.data.profile.id)
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
          <button className='bottomHome ' onClick={()=>this.handleRequest()}>submit</button>
          
          </div>



    )

  }


}
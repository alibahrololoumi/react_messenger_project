import React from 'react';
import logopic from '../logoe.JPG'
import {nameGetter} from '../action/scan.js' 
import axios from 'axios'
import {idGetter} from "../action/getconvid"
import {messageListSaver} from '../action/messagelistsaver'

export default class Conversation extends React.Component{
  handleGetMessageList() {
    let fdata= new FormData()
    fdata.append('token',window.localStorage.getItem('token'))
    fdata.append('conversation_id', this.props.convId)
    fdata.append('size', 12)
    fdata.append('date', (new Date().getTime() / 1000).toFixed(0))


    axios.post('https://api.paywith.click/conversation/details/',fdata)
    .then( (response) => {
      console.log('fucking response message:',response)
      this.props.dispatch(nameGetter(this.props.name))
      this.props.dispatch(idGetter(this.props.convId))
      this.props.dispatch(messageListSaver(response.data.data.messages))

    })

  }

    render () {
       
        return(
            //onClick={()=>this.handleConversation ()}
           // onClick={()=>this.props.dispatch(nameGetter(this.props.name))}
                <div className='contactList' onClick={()=>this.handleGetMessageList()} >
                    <div className='logouser'>
                    <div className='ss'><img src={logopic} alt="as"  className='userPic' /></div>
                    <div className='userandlate'> 
                    <div className='contactName'><span>{this.props.name}</span></div>
                    <div className='latestMessage'><span>{this.props.latestMessage}</span></div>
                    </div>
                    </div>
                    <div className='timeandseen'>
                    <div className='time'><span>23:45</span></div>
                    <div className='unseen'><span>3</span></div>
                    </div>
                
                 </div>
                
                  
                       
        )
    }


}
 

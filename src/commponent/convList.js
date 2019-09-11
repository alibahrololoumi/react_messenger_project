import React from 'react'
import ConversationContainer from '../container/conversationContainer'
import axios from 'axios'
import Conversation from './conversationn'
import {getConvList} from '../action/getConvList'

export default class ConvList extends React.Component{
    constructor () {
        super()
    
        this.state = {
            conversationList:[]
        }
    }
    componentDidMount(){
      axios.get('https://api.paywith.click/conversation/', {
          // token:window.localStorage.getItem('token')
          params: {
             token:window.localStorage.getItem('token')
           }
         })
           .then( (response) => {
             this.props.dispatch(getConvList(response.data.data.conversation_details))
           })
           .catch(function (error) {
             console.log(error)
           })
       }
    render(){
        return(
            <div className='contact'>
                {/* {
                  this.state.contact.map((item)=>{
                    return(
                      <ConversationContainer name={item.name} latestMessage={item.message} />
                    )
                  })
                } */}
                { this.props.conversationList.map((conversation,index) => {
                    return (
                        conversation.users.map((user,idx) => {
                            if (user.id != window.localStorage.getItem('id') ){
                            return(
                                <ConversationContainer
                                    key={index}
                                    name={user.email}
                                    latestMessage={conversation.latestMessage}
                                    unseenMessage={conversation.unseenMessage}
                                    convId={conversation.id}
                                />
                            )}
                        })
                    )
                })

                }

                </div>  
        )
    }
}
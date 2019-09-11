import React from 'react';
import logopic from '../logoe.JPG'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConversationList from './contact.js'
import Chatspace from './chatRoom'
import messageContainer from '../container/messageContainer';

export default class Messenger extends React.Component{
  render () {
    return(
        <div>
            <div className='bigBox'>
                <ConversationList/>
                <Chatspace/>
            </div>
        
        </div>

    )

  }


}
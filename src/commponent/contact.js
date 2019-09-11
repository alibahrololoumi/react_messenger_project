import React from 'react';
import Header30 from './header30'
import axios from 'axios'
import ConvList from './convList'
import ConvListContainer from '../container/ConvListContainer'
export default class ConversationList extends React.Component{      
    render () {
        return(
             <div className='big30'>
                <Header30/>
                <ConvListContainer/>
            </div>
        )
    }
}
 

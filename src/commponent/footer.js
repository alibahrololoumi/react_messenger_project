import React from 'react'
import {maggages} from '../action/mL.js'
import messcon from '../container/messcon'
import axios from 'axios'

export default class Footer extends React.Component{
    constructor(){
        super()
        this.state={
            //kir:''
            mL:''
        }
    }
    handleSendMessage() {
        let fdata = new FormData()
        fdata.append('token', window.localStorage.getItem('token'))
        fdata.append('conversation_id', this.props.convId)
        fdata.append('text', this.state.mL)
        axios.post('https://api.paywith.click/conversation/create/', fdata)
            .then((response) => {
                console.log(response)
                // this.props.dispatch(maggages(this.state.mL))
                // this.props.dispatch()
            })
    }
    render(){
        return(
            <div className='footer70'>
                <div className='imputsize'><input type="text"className='textInput' placeholder='type somethimg....' onChange={(e)=>this.setState({mL:e.target.value})}/></div>
                <div className='textSenderBottom'><button className='bottomSender' onClick={()=>this.handleSendMessage()}>send!</button></div>
                    
                </div>
        )
    }
}
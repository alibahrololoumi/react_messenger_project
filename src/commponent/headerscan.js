import React from 'react'
import {icon} from "../icon.png";
import logopic from '../logoe.JPG'
export default class Header extends React.Component{
    render(){
        return(
            <div>
            <div className='heder70' className='headerName'><p className='headerStatus'>online status:</p>{this.props.name}<img src={logopic} alt="more" className='userPicheader' /></div>
            
            
            </div>
        )
    }
}
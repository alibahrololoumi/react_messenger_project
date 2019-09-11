import React from 'react';
import Header from './headerscan.js'
import HeaderContainer from '../container/headerContainer.js';
import Messagebox from './messagebox.js'
import Footer from "./footer.js";
import Footercon from "../container/footcon"
import Messcon from "../container/messcon"
export default class Chatspace extends React.Component{
    
    render () {
        
        console.log('propsssss:',this.props)
        return(     
            <div className='big70'>
                <HeaderContainer/>
                <Messcon/>
                <Footercon/>
            </div>
        )
    }


}
 

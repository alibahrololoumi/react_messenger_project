
import React from 'react'
export default class Messagebox extends React.Component{
    render(){
        console.log('masss:',this.props)
        return(
            <div className='chatRoom'>
             {this.props.mL.map((item, index) => {
                        if (item.sender['id'] == window.localStorage.getItem('id')) {
                            return (
                                <div key={index} className='sende'>{item.text}</div>
                            )
                        } else {
                            return (
                                <div key={index} className='receave'>{item.text}</div>
                            )
                        }
                    }
                )
                }
                </div>
        )
    }
}


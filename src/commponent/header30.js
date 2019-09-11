import React from 'react'
import axios from 'axios'
export default class Header30 extends React.Component{
    constructor () {
        super()
    
        this.state = {
          newConv: '',
          suggestionUsers: [],
          token: window.localStorage.getItem('token')
        }
    }
    handlecontactsearch (user) {
        
        let fdata = new FormData()
        fdata.append('token',window.localStorage.getItem('token'))
        fdata.append('user_id',user)
        axios.post('https://api.paywith.click/conversation/', fdata)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    handleSearch (e) {
        let fdata = new FormData()
        fdata.append('token', this.state.token)
        fdata.append('query', e.target.value)
        fdata.append('size', 8)
    
        axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
          .then((response) => {
            console.log('data:', response.data)
            this.setState({ suggestionUsers: response.data.data.users })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    render(){
        return(
            <div className='heder30'>
                  <div>
                    <input className='searchInp'
                      type='text'
                      name='newConv'
                      onChange={(e) => this.handleSearch(e)}
                    />
                      {
                        this.state.suggestionUsers.map((user, index) => {
                          let id=user.id
                          return (
                            <span className='search' key={user.id} onClick={() => this.handlecontactsearch(id)}>
                              {user.email}
                            </span>
                          )
                        })
                      }
                  </div>
                </div>
        )
    }
}
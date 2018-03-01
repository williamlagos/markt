import React, { Component } from 'react'
import Detail from '../components/Detail'

class Profile extends Component {
  logout (event) {
    event.preventDefault()
    sessionStorage.removeItem('token')
    window.location = '/'
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <Detail/>
        </div>
      </div>
    )
  }
}

export default Profile

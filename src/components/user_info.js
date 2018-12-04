import React from 'react'
import {connect} from 'react-redux'

const UserInfo = (props) => {

  return(
    <div className="user-info-container">
      <div className="image-pos">
        <img src="/timdog.jpg" alt=""/>
      </div>
      <div className="user-content">
        <p id="displayname">{props.currentUser.displayname}</p>
        <br></br>
        <label id="user-bio-label">Bio:</label>
        <br></br>
        <p id="user-bio">{props.currentUser.bio}</p>
      </div>
      <div className="edit-user">
        <i className="fas fa-user-edit"></i>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps)(UserInfo)

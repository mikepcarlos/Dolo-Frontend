import React from 'react'
import {connect} from 'react-redux'
import MyProjects from './my_projects.js'

const UserInfo = (props) => {

  return(
    <div className="user-info">
      {console.log("In user Info STEP 4")}
      <h2>{props.currentUser.displayname}</h2>
      <h5>{props.currentUser.email}</h5>
      <h5>{props.currentUser.username}</h5>
      {console.log("in user info", props.currentUser)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps)(UserInfo)

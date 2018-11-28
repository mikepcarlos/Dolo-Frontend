import React from 'react'
import {connect} from 'react-redux'
import MyProjects from './my_projects.js'

const UserInfo = (props) => {

  return(
    <div className="user-info">
      <h2>{props.currentUser.displayname}</h2>
      <h3>{props.currentUser.email}</h3>
      <h4>{props.currentUser.score}</h4>
      <MyProjects />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserInfo)

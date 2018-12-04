import React from 'react'
import {connect} from 'react-redux'

const UserScoreBoard = (props) => {

  return(
    <div className="user-score-board">
      <div id="user-score-board-stats">
        <p>score: {props.currentUser.score}</p>
        <br></br>
        <p>username: {props.currentUser.username}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps)(UserScoreBoard)

import React from 'react'

const UserTasks = (props) => {

  return(
    <div className="user-tasks-info">
      <div className="user-task-content">
        <p>Title: {props.task.title}</p>
        <p>Time left: {props.task.timeleft}</p>
        <p>Started: {props.task.start}</p>
      </div>
    </div>
  )
}

export default UserTasks

import React from 'react'
import {connect} from 'react-redux'
import UserTasks from '../components/user_tasks.js'

const TaskContainer = (props) => {

  let renderTasks = props.myTasks !== undefined && props.myTasks.map(task => <UserTasks task={task} key={task.id}/>)

  return(
    <div className="user-tasks">
      <div className="task-label">
        <label>Task Ticker</label>
      </div>
      <div className="task-collector">
        {renderTasks}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myTasks: state.currentUser.user.tasks
  }
}

export default connect(mapStateToProps)(TaskContainer)

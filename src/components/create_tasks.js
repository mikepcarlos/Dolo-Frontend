import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllUsers } from '../redux/actions.js'
import { getCurrentTasks } from '../redux/actions.js'
import { withRouter } from "react-router";

class Tasks extends Component{

  constructor(){
    super()

    this.state = {
      clicked: false,
      taskFields: {
        title: "",
        description: ""
      },
      userTask: {
        username: ""
      }
    }
  }

  componentDidMount(){
    const URL = "http://localhost:3000/users"
    fetch(URL, {
      method: 'GET',
      headers: {
        "Authorization": localStorage.tokemon
      }
      })
      .then(res => res.json())
      .then(users => this.props.allUsers(users))
  }

  handleTaskFieldChange = (e) => {
    const newTaskField = {
      ...this.state.taskFields,
        [e.target.name]: e.target.value
    }

    this.setState({
      taskFields: newTaskField
    })
  }

  handleUserChange = (e) => {
    const newFields = {
      ...this.state.userTask,
        [e.target.name]: e.target.value
    }

    this.setState({
      userTask: newFields
    })
  }

  renderTasksOrNah = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  renderOptionTag = () => {
    if (this.props.allUsers === undefined){
      return(
        <option value="Not Valid">No Users!</option>
      )
    } else {
      return this.props.users.map(user => {
        return(
          <option key={user.id} value={user.attributes.username}>{user.attributes.username}</option>
        )
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.getUserTaskId(this.state.userTask.username)
    this.postTask(this.state.taskFields.title, this.state.taskFields.description, this.getUserTaskId(this.state.userTask.username), this.props.currentProj.id)
    this.setState({
      clicked: !this.state.clicked,
      taskFields: {
        title: "",
        description: ""
      },
      userTask: {
        username: ""
      }
    })
  }

  getUserTaskId = (username) => {
    if(username !== ""){
      for (var i = 0; i < this.props.users.length; i++){
        let user = this.props.users[i]
        if (user.attributes.username === username){
          return user.id
        }
      }
    }
  }

  postTask = (title, desc, userId, projId) => {
    const id = parseInt(userId)
    const URL = 'http://localhost:3000/tasks'
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        "Authorization": localStorage.tokemon
      },
      body: JSON.stringify({
        task: {
          title: title,
          description: desc,
          project_id: projId,
          user_id: id
        }
      })
    })
    .then(res => res.json())
    .then(task => this.props.getTasks(task))
  }

  displayNewProjInfo = () => {
    if (this.props.currentProj.id){
      return (
        <div className="new-project">
          <h3>Project Info</h3>
          <div className="project-content">
            <div>
              <label>Name</label>
              <p>{this.props.currentProj.attributes.name}</p>
            </div>
            <div>
              <label>Category</label>
              <p>{this.props.currentProj.attributes.category}</p>
            </div>
            <div>
              <label>Description</label>
              <p>{this.props.currentProj.attributes.description}</p>
            </div>
          </div>
        </div>
      )
    }
  }

  displayNewTask = () => {
    let arr= [];
    for (var i = 0; i < this.props.newTasks.length; i++){
      let task = this.props.newTasks[i]
        arr.push(
        <div className="new-tasks">
          <p>{task.attributes.title}</p>
        </div>)
    }
    return arr
  }

  returnToDashBoard = () => {
    this.props.history.push("/dashboard")
  }


  render(){
    return(
      <div className="create-tasks-page">
        <div className="new-project-info">
          {this.displayNewProjInfo()}
        </div>
        <div className="new-task-info">
          <h3>Tasks</h3>
          {this.displayNewTask()}
        </div>
          {this.state.clicked ?
            <div>
              <div className="task-form-daddy">
                <form className="task-form-boi" autoComplete="off" onSubmit={this.handleSubmit}>
                  <label>Title</label>
                  <input onChange={this.handleTaskFieldChange} type="text" name="title" value={this.state.taskFields.title}/>
                  <label>Description</label>
                  <input onChange={this.handleTaskFieldChange} type="text" name="description" value={this.state.taskFields.description}/>
                  <label>Assign a Task!</label>
                  <div className="dropdown">
                    <select className="dropdown-select" onChange={this.handleUserChange} value={this.state.userTask.username} name="username">
                      <option></option>
                      {this.renderOptionTag()}
                    </select>
                  </div>
                  <div className="container-tasks-submit-btn">
                    <button type="Submit" className="submit-tasks-button">Submit</button>
                  </div>
                  <div className="container-dashboard-btn-2">
                    <button onClick={this.returnToDashBoard} type="button" className="go-to-dashboard-button-2">DASHBOARD</button>
                  </div>
                </form>
              </div>
            </div> : (
              <div className="add-task">
                <button className="add-task-button" type="button" onClick={this.renderTasksOrNah}>Add a Task</button>
              </div>
            )
          }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.allUsers,
    projects: state.projects,
    currentProj: state.newProj,
    newTasks: state.currentTasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allUsers: (users) => dispatch(getAllUsers(users)),
    getTasks: (tasks) => dispatch(getCurrentTasks(tasks))}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tasks))

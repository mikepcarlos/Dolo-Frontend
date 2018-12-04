import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllUsers } from '../redux/actions.js'

class Tasks extends Component{

  constructor(){
    super()

    this.state = {
      taskMarkup: [],
      taskFields: {
        taskTitle: "",
        taskDescription: ""
      }
    }
  }

  componentDidMount(){
    const URL = "http://localhost:3000/users"
    fetch(URL)
      .then(res => res.json())
      .then(users => this.props.allUsers(users))
  }

  handleTaskFieldChange = () => {
    console.log("hit");
  }

  renderTasks = () => {
    const markup = (
      <div>
        <label>Title</label>
        <input onChange={this.handleTaskFieldChange} type="text" placeholder="Title" name="taskTitle" value={this.state.taskFields.taskTitle}/>
        <label>Description</label>
        <input onChange={this.handleTaskFieldChange} type="text" placeholder="Description" name="taskDescription" value={this.state.taskFields.taskDescription}/>
        <select> give someone a task!
          <option value=""></option>
          {this.renderOptionTag()}
        </select>
      </div>
    )
    this.setState({
      taskMarkup: [...this.state.taskMarkup, markup]
    })
  }

  renderTask = () => {
    if (this.state.taskMarkup.length !== 0){
      return this.state.taskMarkup.map(taskMarkup => {
        return taskMarkup;
      })
    }
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

  render(){
    return(
      <div>
        <button type="button" onClick={this.renderTasks}>Add a Task</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {allUsers: (users) => dispatch(getAllUsers(users))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)

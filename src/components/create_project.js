import React, { Component } from 'react';


export default class CreateProject extends Component {

  constructor(){
    super()

    this.state = {
      taskMarkup: []
    }
  }

  renderTasks = () => {
    const markup = (
      <div>
        <label>Title</label>
        <input type="text" placeholder="Title"/>
        <label>Description</label>
        <input type="text" placeholder="Description"/>
      </div>
    )
    this.setState({
      taskMarkup: [...this.state.taskMarkup, markup]
    })
  }

  renderTask = () => {
    if (this.state.taskMarkup.length !== 0){
      return this.state.taskMarkup.map(taskMarkup => {
        // debugger
        return taskMarkup;
      })
    }
  }

  render(){
    return(
      <div className="project-form">
      <h2>Create a Project</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Name"/>
          <label>Category</label>
          <input type="text" placeholder="Category"/>
          <label>Description</label>
          <input type="text" placeholder="Description"/>
          <button type="button" onClick={this.renderTasks}>Add a Task</button>
          {this.renderTask()}
          <br></br>
          <button type="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getProjects } from '../redux/actions.js'
import { setProject } from '../redux/actions.js'
import Tasks from './create_tasks.js'


class CreateProject extends Component {

  constructor(){
    super()

    this.state = {
      fields: {
        name: "",
        category: "",
        description: ""
      }
    }
  }

  componentDidMount(){
    const URL = "http://localhost:3000/projects"
    fetch(URL, {
      method: 'GET',
      headers: {
        "Authorization": localStorage.tokemon
      }
    })
      .then(res => res.json())
      .then(projects => this.props.getProjects(projects))
  }

  handleNormalFieldChange = (e) => {
    const newFields = {
      ...this.state.fields,
        [e.target.name]: e.target.value
    }

    this.setState({
      fields: newFields
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.postingProject(this.state.fields.name, this.state.fields.category, this.state.fields.description, this.props.currentUser.user.id)
  }

  postingProject = (name, category, desc, userId) => {
    // debugger
    const URL = "http://localhost:3000/projects"
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        "Authorization": localStorage.tokemon
      },
      body: JSON.stringify({
        project: {
          name: name,
          category: category,
          img: "",
          description: desc
        }
      })
    })
    .then(res => res.json())
    .then(project => this.props.setProject(project))
  }

  renderTasksOrNah = () => {
    if (this.props.newProj.id){
      return (
        <Tasks />
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleNormalFieldChange} type="text" placeholder="Name" name="name" value={this.state.fields.name}/>
          <label>Category</label>
          <input onChange={this.handleNormalFieldChange} type="text" placeholder="Category" name="category" value={this.state.fields.category}/>
          <label>Description</label>
          <input onChange={this.handleNormalFieldChange} type="text" placeholder="Description" name="description" value={this.state.fields.description}/>
          <br></br>
          <button type="Submit">Submit</button>
        </form>
      )
    }
  }

  render(){
    return(
      <div className="create-project-page">
        <div className="project-form">
          <h2>Create a Project</h2>
            {this.renderTasksOrNah()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    projects: state.projects,
    newProj: state.newProj
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: (projects) => dispatch(getProjects(projects)),
    setProject: (project) => dispatch(setProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

import React, { Component } from 'react';
import {connect} from 'react-redux'
import ProjectCard from './project_card.js'
import { withRouter } from "react-router";
// import { getAllUsers } from '../redux/actions.js'
// import CreateProject from './create_project.js'
// import { BrowserRouter as Router, Route} from 'react-router-dom'

class MyProjects extends Component {

  renderProjectCard = () => {
    if (this.props.myProjects !== undefined){
      return this.props.myProjects.map(project => <ProjectCard key={project.id} project={project}/>)
    }
  }

  handleAddProjectClick = () => {
    // const URL = "http://localhost:3000/users"
    // fetch(URL)
    //   .then(res => res.json())
    //   .then(users => this.props.allUsers(users))
    this.props.history.push("/create_project")
  }

  render(){
    return(
      <div className="my-projects-container">
        <div className="my-projects">
          <div className="project-title">
            <div className="create-project-icon">
              <i onClick={this.handleAddProjectClick} className="fas fa-plus"></i>
            </div>
            <p>My Projects</p>
          </div>
          <div className="project-cards">
            {this.renderProjectCard()}
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    myProjects: state.currentUser.user.projects
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {allUsers: (users) => dispatch(getAllUsers(users))}
// }

export default connect(mapStateToProps)(withRouter(MyProjects))

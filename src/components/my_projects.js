import React, { Component } from 'react';
import {connect} from 'react-redux'
import ProjectCard from './project_card.js'
import CreateProject from './create_project.js'

class MyProjects extends Component {

  renderProjectCard = () => {
    return this.props.myProjects.map(project => <ProjectCard key={project.id} project={project}/>)
  }

  render(){
    return(
      <div className="my-projects">
        <h1>MY PROJECTS:</h1>
        {this.renderProjectCard()}
        <CreateProject />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    myProjects: state.currentUser.projects
  }
}

export default connect(mapStateToProps)(MyProjects)

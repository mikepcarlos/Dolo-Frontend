import React from 'react'

const ProjectCard = (props) => {
  return(
    <div className="project-stuff">
      <p>{props.project.name}</p>
      <p>{props.project.category}</p>
      <p>{props.project.description}</p>
    </div>
  )
}

export default ProjectCard

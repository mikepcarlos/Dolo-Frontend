import React from 'react'

const ProjectCard = (props) => {
  return(
    <div>
      <h2>{props.project.name}</h2>
      <h4>{props.project.category}</h4>
      <p>{props.project.description}</p>
    </div>
  )
}

export default ProjectCard

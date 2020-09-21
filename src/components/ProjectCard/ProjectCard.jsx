import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div>
            <h3>{project.name}</h3>
            {/* <p>Description: {project.description}</p> */}
            {/* <p>Public? {project.public}</p> */}
            {/* <p>Hobby: {project.hobby}</p> */}
            {/* <p>Date Started: {project.dateStarted}</p> */}
            {/* <p>Due Date: {project.targetDate}</p> */}
            {/* <p>Complete? {project.completed}</p> */}
        </div>
    );
}


export default ProjectCard;
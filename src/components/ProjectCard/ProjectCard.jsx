import React from 'react'
import Card from 'react-bootstrap/Card'

const ProjectCard = ({ project }) => {
  return (
    <div>
      <Card style={{ width: '20rem' }} className='imgCard'>
        <Card.Body>
          <Card.Title> <h3>{project.name}</h3> </Card.Title>
          <Card.Img
            variant="top"
            src={project.images.length ? project.images[0].url : 'https://i.imgur.com/NthKWeT.png'}
            width="200"
          >
          </Card.Img>

          <Card.Text>
            {/* <p>Description: {project.description}</p>
            <p>Public? {project.public}</p>
            <p>Hobby: {project.hobby}</p>
            <p>Date Started: {project.dateStarted}</p>
            <p>Due Date: {project.targetDate}</p>
            <p>Complete? {project.completed}</p> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}


export default ProjectCard;
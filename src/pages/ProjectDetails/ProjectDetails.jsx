import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'
import authService from '../../services/authService'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './ProjectDetails.css'

class ProjectDetails extends Component {
  state = {
    project: {
      images: [],
      supplies: []
    }
  }

  async componentDidMount() {
    const project = await projectAPI.projectDetails(this.props.match.params.id)
    this.setState({ project })
  }

  handleDeleteProject = async id => {
    if (authService.getUser()) {
      await projectAPI.deleteProject(id)
        .then(() => this.props.history.push(`/projects/${this.props.user._id}`));
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    const project = this.state.project
    const user = this.props.user
    return (
      <>
        <div className="editProject-container">
          <h1>{project.name}</h1>
          <p>Description: {project.description}</p>
          <p>Hobby: {project.hobby}</p>
          <p>Date Started: {project.dateStarted}</p>
          {/* consider adding a function to turn the date string from 2020-10-03 to 10-03-2020 */}
        </div>
        <div className="project-supplies-container">
          <h2>Project Supplies</h2>
          {this.state.project.supplies.map((supply, idx) =>
            <div key={idx} className={supply.own ? 'black' : 'grey'} >
              <p>Type: {supply.type}< br />
                                Name: {supply.name}< br />
                                Brand: {supply.brand}</p>
            </div>
          )}
        </div>

        <h2>Project Images</h2>
        <Container className="project-images-container">
          {this.state.project.images.map((images, idx) =>
            <Row id='rows'>
              <img key={idx} width="100" src={this.state.project.images[idx].url} alt="" />
            </Row>
          )}
        </Container>

        {user && (user._id === project.user) &&
          <div className="button-div" id='project-details-buttons'>
            <Link
              className='purpleButton'
              id='button'
              to={{
                pathname: '/editproject',
                state: { project },
              }}
            >
              Edit Project
                            </Link>
            <Button type="submit" onClick={() => this.handleDeleteProject(project._id)} className="redButton" id='button'>
              Delete Project
                            </Button>
          </div>
        }
      </>
    );
  }
}

export default ProjectDetails;
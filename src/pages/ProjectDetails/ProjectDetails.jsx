import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'
import authService from '../../services/authService'
import './ProjectDetails.css'

class ProjectDetails extends Component {
    state = {
        project: { images: [] }
    }

    async componentDidMount() {
        const project = await projectAPI.projectDetails(this.props.match.params.id)
        this.setState({ project })
    }

    handleDeleteProject = async id => {
        if (authService.getUser()) {
            await projectAPI.deleteProject(id)
                .then(() => this.props.history.push('/projects'));
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
                </div>
                <div className="editProject-container">
                    <h2>Project Images</h2>
                    {this.state.project.images.map((images, idx) =>
                        <img key={idx} width="100" src={this.state.project.images[idx].url} alt="" />
                    )
                    }
                </div>
                {user && (user._id === project.user) &&
                    <div className="edit-delete-container">
                        <Link
                            to={{
                                pathname: '/editproject',
                                state: { project },
                            }}
                        >
                            Edit Project
                            </Link><br></br>
                        <button type="submit" onClick={() => this.handleDeleteProject(project._id)} className="edit-delete-container">
                            Delete Project
                            </button><br></br>
                    </div>
                }
            </>
        );
    }
}

export default ProjectDetails;
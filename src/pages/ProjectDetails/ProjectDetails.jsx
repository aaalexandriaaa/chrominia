import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { projectDetails } from '../../services/projects-api'

class ProjectDetails extends Component {
    state = {
        project: {}
    }

    async componentDidMount() {
        const project = await projectDetails(this.props.match.params.id)
        this.setState({ project })
    }
    render() {
        const project = this.state.project
        return (
            <>
                <div>
                    <h1>{project.name}</h1>
                    <p>Description: {project.description}</p>
                    <p>Hobby: {project.hobby}</p>
                    <p>Date Started: {project.dateStarted}</p>
                </div>
                <Link to="/projects">
                    Projects
                </Link><br />
                <Link to="/editproject">
                    Edit Project
                </Link><br />
                {/* <ProjectCard
                    project={project}
                /> */}
            </>
        );
    }
}

export default ProjectDetails;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

class Project extends Component {
    state = {
        projects: []
    }

    async componentDidMount() {
        const projects = await projectAPI.getAll();
        this.setState({ projects })
    }

    render() {
        return (
            <>
                <h1>Projects!</h1>
                <Link to="/addproject">
                    Add a Project
                </Link><br />
                <Link to="/projectdetails">
                    Project Details
                </Link><br />
                <Link to="/editproject">
                    Edit Project
                </Link><br />
                {this.state.projects.map((project, idx) =>
                    <ProjectCard
                        key={idx}
                        project={project}
                    />
                )}
            </>
        );
    }
}

export default Project;
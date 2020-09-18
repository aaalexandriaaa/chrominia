import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProjectDetails extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Project Details</h1>
                <Link to="/projects">
                    Projects
                </Link><br />
                <Link to="/editproject">
                    Edit Project
                </Link><br />
            </>
        );
    }
}

export default ProjectDetails;
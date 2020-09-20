import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Project extends Component {
    state = {
        projects: []
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
            </>
        );
    }
}

export default Project;
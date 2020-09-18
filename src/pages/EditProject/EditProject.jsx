import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class EditProject extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Edit Project</h1>
                <Link to="/projects">
                    Projects
                </Link><br />
            </>
        );
    }
}

export default EditProject;
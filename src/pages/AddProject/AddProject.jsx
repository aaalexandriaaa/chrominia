import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'

class AddProject extends Component {
    state = {
        invalidForm: false,
        formData: {
            name: ''
        }
    }

    formRef = React.createRef()

    handleAddProject = async newProjectData => {
        console.log("ADDPROJECT")
        await projectAPI.create(newProjectData)
        .then(() => this.props.history.push('/projects'))
        console.log("PROJECTADDED")
    }

    handleSubmit = e => {
        e.preventDefault();
        this.handleAddProject(this.state.formData)
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    render() {
        return (
            <>
                <Link to="/projects">
                    Projects
                </Link><br />
                <h1>Add Project</h1>
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div>
                        <label >name</label><br></br>
                        <input name="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                    </div>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Add Project
                    </button>
                </form>
            </>
        );
    }
}

export default AddProject;
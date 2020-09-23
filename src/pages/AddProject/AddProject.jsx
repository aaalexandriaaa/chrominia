import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'

class AddProject extends Component {
    state = {
        invalidForm: false,
        formData: {
            name: '',
            hobby: '',
            public: 'true',
            description: '',
            completed: 'false',
            dateStarted: '',
            targetDate: ''
        }
    }
    formRef = React.createRef()

    handleAddProject = async newProjectData => {
        console.log("ADDPROJECT")
        await projectAPI.create(newProjectData)
            .then(() => this.props.history.push(`/projects/${this.props.user._id}`))
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
                <h1>Add Project</h1>
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div>
                        <label >Project Name</label><br></br>
                        <input name="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <label >Project Description</label><br></br>
                        <textarea name="description" rows="5" cols="30" value={this.state.formData.description} onChange={this.handleChange} >
                            Project description...
                        </textarea>
                    </div><br />
                    <div>
                        <label >Mini Type <br /> (e.g., Games Workshop, Boardgame Mini, etc)</label><br></br>
                        <input name="hobby" type="text" value={this.state.formData.hobby} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <label >Date Started</label><br></br>
                        <input name="dateStarted" type="date" value={this.state.formData.dateStarted} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <label >Target Due Date</label><br></br>
                        <input name="targetDate" type="date" value={this.state.formData.targetDate} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <select name="public" onChange={this.handleChange} value={this.state.formData.public} required>
                            <option value="true">Public</option>
                            <option value="false">Private</option>
                        </select>
                    </div><br />
                    <div>
                        <select name="completed" onChange={this.handleChange} value={this.state.formData.completed} required>
                            <option value="true">Complete</option>
                            <option value="false">In Progress</option>
                        </select>
                    </div><br />
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Add Project
                    </button><br /><br /><br /><br />
                </form>
            </>
        );
    }
}

export default AddProject;




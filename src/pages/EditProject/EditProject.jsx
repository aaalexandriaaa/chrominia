import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'

class EditProject extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.project
    }

    formRef = React.createRef()

    handleUpdateProject = async projectUpdate => {
        await projectAPI.update(projectUpdate)
            .then(() => this.props.history.push(`projectdetails/${projectUpdate._id}`))
    }
    handleSubmit = e => {
        e.preventDefault();
        this.handleUpdateProject(this.state.formData)
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

                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div>
                        <label >Project Name</label><br></br>
                        <input name="name" type="text" defaultValue={this.state.formData.name || ""} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <label >Project Description</label><br></br>
                        <textarea name="description" rows="5" cols="30" value={this.state.formData.description} onChange={this.handleChange} >
                            Project description...
                        </textarea>
                    </div><br />
                    <div>
                        <label >Mini Type <br /> (e.g., Games Workshop, Boardgame Mini, etc)</label><br></br>
                        <input name="hobby" type="text" defaultValue={this.state.formData.hobby || ""} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <label >Date Started</label><br></br>
                        <input name="dateStarted" type="date" defaultValue={this.state.formData.dateStarted} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <label >Target Due Date</label><br></br>
                        <input name="targetDate" type="date" defaultValue={this.state.formData.targetDate} onChange={this.handleChange} required />
                    </div><br />
                    <div>
                        <label >Completed?</label><br></br>
                        <textarea name="stuff" rows="5" cols="30">
                            i think i want a button here for mark as completed??
                        </textarea>
                    </div>
                    <div>
                        <label >Private?</label><br></br>
                        <textarea name="stuff" rows="5" cols="30">
                            i think we need button for making the project private
                        </textarea>
                    </div><br />
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Update Project
                    </button><br /><br /><br /><br />
                </form>
            </>
        );
    }
}

export default EditProject;
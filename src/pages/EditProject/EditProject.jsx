import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'
import * as imageAPI from '../../services/images-api'
import * as suppliesAPI from '../../services/supplies-api'
import ImageCard from '../../components/ImageCard/ImageCard'

class EditProject extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.project,
        images: [],
        project: this.props.location.state.project,
        supplies: []
    }

    formRef = React.createRef()

    handleUpdateProject = async projectUpdate => {
        await projectAPI.update(projectUpdate)
            .then(() => this.props.history.push(`projectdetails/${projectUpdate._id}`))
    }

    async componentDidMount() {
        const images = await imageAPI.getForUser(this.props.user._id);
        const supplies = await suppliesAPI.getForUser();
        // I don't think the API uses the user id, but if it does - this.props.user._id
        this.setState({ images, supplies })
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

    async handleAttachImage(id, project) {
        const imageID = { boop: id }
        await projectAPI.attachImage(imageID, project)
            .then(() => this.props.history.push(`projectdetails/${project}`))
    }

    async handleAttachSupply(id, project) {
        const supplyID = { boop: id }
        console.log(supplyID)
        await projectAPI.attachSupply(supplyID, project)
            .then(() => this.props.history.push(`projectdetails/${project}`))
    }

    render() {
        const projectID = this.state.formData._id
        return (
            <>

                <Link to="/projects">
                    Projects
                </Link><br />
                <div>
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
                </div>
                {/* <div>
                    <h2>Project Images</h2>
                    <div>
                        {this.props.location.state.project.images.map((image, idx) =>
                            <img key={idx} width="100" src={image.url} alt="" />
                        )}
                    </div>
                </div> */}
                <div>
                    <h2>User's Supplies</h2>
                    <div>
                        {this.state.supplies.map((supply, idx) =>
                            <div key={idx}>
                                <p>Type: {supply.type}< br />
                                Name: {supply.name}< br />
                                Brand: {supply.brand}</p>
                                <button type="submit" onClick={() => this.handleAttachSupply(supply._id, projectID)}>
                                    Add Supply to Project
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h2>User's Images</h2>
                    {this.state.images.map((image, idx) =>
                        <Link
                            key={idx}
                        >
                            <ImageCard
                                image={image}
                            />
                            <button type="submit" onClick={() => this.handleAttachImage(image._id, projectID)}>
                                Add Image to Project
                            </button>

                        </Link>
                    )}
                </div>

            </>
        );
    }
}

export default EditProject;
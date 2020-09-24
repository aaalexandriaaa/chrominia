import React, { Component } from 'react'
import * as projectAPI from '../../services/projects-api'
import * as imageAPI from '../../services/images-api'
import * as suppliesAPI from '../../services/supplies-api'
import ImageCard from '../../components/ImageCard/ImageCard'
import SupplyTable from '../../components/SupplyTable/SupplyTable'
import './EditProject.css'

const types = [
    ['paint', 'Paints'], ['brush', 'Brushes'], ['model', 'Modeles'], ['paintacc', 'Paint Accessories'], ['other', 'Other Supplies'], ['tool', 'Tools'], ['material', 'Materials']
]

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
        const supplies = await suppliesAPI.getAllForUser();
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

    handleAttachSupply = async (id, project) =>{
        const supplyID = { boop: id }
        await projectAPI.attachSupply(supplyID, project)
            .then(() => this.props.history.push(`projectdetails/${project}`))
        // rather than redirect, say on this page, but we will need to manually add the supply to the project in state, since componentDidMount will not file again
        // The following code has been tested to work:
        // const supply = this.state.supplies.find(s => s._id === id)
        // const updatedProject = this.state.project
        // updatedProject.supplies.push(supply)
        // this.setState({ project: updatedProject })
    }

    hasSupply = (supplies, supID) => {
        let result = false
        supplies.forEach(s =>{
            if (s._id === supID) {
                result = true
            }
        })
        return result
    }

    pullSupply = supply => {
        const list = this.state.supplies.filter(each => each.type === supply)
        return list
    }

    render() {
        const projectID = this.state.formData._id
        return (
            <>
                <h1>Edit Project</h1>
                <div>
                    <form ref={this.formRef} onSubmit={this.handleSubmit}>
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
                <h2>Attatch Supplies</h2>
                <div className="attatch-supplies-container">
                    <div>
                    {types.map((type, idx) => 
                        <div key={idx}>
                            <SupplyTable 
                                type={type[1]}
                                supplies={this.pullSupply(type[0])}
                                projectID={projectID}
                                project={this.state.project}
                                handleAttachSupply={this.handleAttachSupply}
                            />
                        <h3>{type[1]}</h3>
                        <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Paint Type</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Brand</th>
                                <th>On Wish List?</th>
                                <th>Attatch to Project?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.pullSupply(type[0]).map((supply, idx) => 
                                    <tr key={idx}>
                                    <td>{supply.name}</td>
                                    <td>{supply.paintType}</td>
                                    <td>{supply.color}</td>
                                    <td>{supply.size}</td>
                                    <td>{supply.brand}</td>
                                    <td>{supply.own ? '' : 'Y'}</td>
                                    <td>{this.hasSupply(this.state.project.supplies, supply._id) ? 
                                                "Attatched"
                                            :
                                                <button onClick={() => this.handleAttachSupply(supply._id, projectID)}>Attach</button>
                                        }</td>
                                </tr>
                            )}
                        </tbody>
                       </table>
                       </div>
                        )}
                    
                    </div>
                </div>
                <div>
                    <h2>User's Images</h2>
                    {this.state.images.map((image, idx) =>
                        <div key={idx}>
                            <ImageCard
                                image={image}
                            />
                            <button type="submit" onClick={() => this.handleAttachImage(image._id, projectID)}>
                                Add Image to Project
                            </button>

                        </div>
                    )}
                </div>

            </>
        );
    }
}

export default EditProject;
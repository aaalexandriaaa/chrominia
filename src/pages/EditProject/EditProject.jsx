import React, { Component } from 'react'
import * as projectAPI from '../../services/projects-api'
import * as imageAPI from '../../services/images-api'
import * as suppliesAPI from '../../services/supplies-api'
import SupplyTable from '../../components/SupplyTable/SupplyTable'
import AttachImageCard from '../../components/AttachImageCard/AttachImageCard'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './EditProject.css'

const types = [
  ['paint', 'Paints'], ['brush', 'Brushes'], ['model', 'Models'], ['paintacc', 'Paint Accessories'], ['other', 'Other Supplies'], ['tool', 'Tools'], ['material', 'Materials']
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

  handleAttachImage = async (id, project) => {
    const imageID = { boop: id }
    await projectAPI.attachImage(imageID, project)
    // .then(() => this.props.history.push(`projectdetails/${project}`))
    const image = this.state.images.find(i => i._id === id)
    const updatedProject = this.state.project
    updatedProject.images.push(image)
    this.setState({ project: updatedProject })
  }

  handleRemoveImage = async (id, project) => {
    const supplyID = { boop: id }
    await projectAPI.removeImage(supplyID, project)
    // .then(() => this.props.history.push(`/projectdetails/${project}`))
    const updatedProject = this.state.project
    const idx = updatedProject.images.findIndex(i => i._id === id)
    updatedProject.images.splice(idx, 1)
    this.setState({ project: updatedProject })
  }

  handleAttachSupply = async (id, project) => {
    const supplyID = { boop: id }
    await projectAPI.attachSupply(supplyID, project)
    //     .then(() => this.props.history.push(`projectdetails/${project}`))
    // rather than redirect, say on this page, but we will need to manually add the supply to the project in state, since componentDidMount will not file again
    // The following code has been tested to work:
    const supply = this.state.supplies.find(s => s._id === id)
    const updatedProject = this.state.project
    updatedProject.supplies.push(supply)
    this.setState({ project: updatedProject })
  }

  handleRemoveSupply = async (id, project) => {
    const supplyID = { boop: id }
    await projectAPI.removeSupply(supplyID, project)
    // .then(() => this.props.history.push(`/projectdetails/${project}`))
    const updatedProject = this.state.project
    const idx = updatedProject.supplies.findIndex(s => s._id === id)
    updatedProject.supplies.splice(idx, 1)
    this.setState({ project: updatedProject })
  }

  hasSupply = (supplies, supID) => {
    let result = false
    supplies.forEach(s => {
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
        <Container className='projects-container'>
          <Container className='edit-project-form'>
            <h1>Edit Project</h1>
            <Form ref={this.formRef} onSubmit={this.handleSubmit}>
              <div>
                <Form.Label >Project Name</Form.Label><br></br>
                <Form.Control name="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
              </div><br />
              <div>
                <Form.Label >Project Description</Form.Label><br></br>
                <Form.Control as='textarea' name="description" rows="5" cols="30" value={this.state.formData.description} onChange={this.handleChange} >
                  Project description...
                        </Form.Control>
              </div><br />
              <div>
                <Form.Label >Mini Type <br /> (e.g., Games Workshop, Boardgame Mini, etc)</Form.Label><br></br>
                <Form.Control name="hobby" type="text" value={this.state.formData.hobby} onChange={this.handleChange} required />
              </div><br />
              <div>
                <Form.Label >Date Started</Form.Label><br></br>
                <Form.Control style={{ width: '50%', margin: '0 auto' }} name="dateStarted" type="date" value={this.state.formData.dateStarted} onChange={this.handleChange} required />
              </div><br />
              <div>
                <Form.Label >Target Due Date</Form.Label><br></br>
                <Form.Control style={{ width: '50%', margin: '0 auto' }} name="targetDate" type="date" value={this.state.formData.targetDate} onChange={this.handleChange} required />
              </div><br />
              <div>
                <Form.Control style={{ width: '50%', margin: '0 auto' }} as='select' size='sm' name="public" onChange={this.handleChange} value={this.state.formData.public} required>
                  <option value="true">Public</option>
                  <option value="false">Private</option>
                </Form.Control>
              </div><br />
              <div>
                <Form.Control style={{ width: '50%', margin: '0 auto' }} as='select' size='sm' name="completed" onChange={this.handleChange} value={this.state.formData.completed} required>
                  <option value="true">Complete</option>
                  <option value="false">In Progress</option>
                </Form.Control>
              </div><br />
              <Button
                style={{ margin: '0 auto' }}
                className='purpleButton'
                id='button'
                type="submit"
                disabled={this.state.invalidForm}
              >
                Update Project
                    </Button>
            </Form>
          </Container>

          <Container className='attach-supplies-container'>
            <h2>Attach Supplies</h2>
            {types.map((type, idx) =>
              <Row key={idx} id='rows'>
                <SupplyTable
                  id='supply-table'
                  type={type[1]}
                  supplies={this.pullSupply(type[0])}
                  projectID={projectID}
                  project={this.state.project}
                  handleAttachSupply={this.handleAttachSupply}
                  handleRemoveSupply={this.handleRemoveSupply}
                />
              </Row>
            )}
          </Container>
        </Container>

        <h2>Attach Images</h2>
        <Container className='gallery-container'>
          {this.state.images.map((image, idx) =>
            <Col key={idx}>
              <AttachImageCard
                image={image}
                projectID={projectID}
                project={this.state.project}
                handleAttachImage={this.handleAttachImage}
                handleRemoveImage={this.handleRemoveImage}
              />
            </Col>
          )}
        </Container>
      </>
    );
  }
}

export default EditProject;
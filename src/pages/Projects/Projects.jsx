import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as projectAPI from '../../services/projects-api'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css';

class Project extends Component {
  state = {
    projects: []
  }

  async componentDidMount() {
    const projects = await projectAPI.getUserProjects();
    this.setState({ projects })
  }

  render() {
    return (
      <>
        <h1>My Projects</h1>
        <div className="addProject">
          <a href="/addproject" className="addProjectButton">
            Add a Project
                </a><br />
        </div>
        <div className="project-card">
          {this.state.projects.map((project, idx) =>
            <Link
              key={idx}
              to={{
                pathname: `/projectdetails/${project._id}`
              }}
            >
              <ProjectCard
                project={project}
              />
            </Link>
          )}
        </div>
      </>
    );
  }
}

export default Project;
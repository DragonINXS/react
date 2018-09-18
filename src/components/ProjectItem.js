import React, { Component } from 'react';
// import './App.css';

class ProjectItem extends Component {

    // need to finish this up 
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
    return (
        <li className="Projects">
            <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this.props.project.id)}>X</a>
        </li>
    );
  }
}

export default ProjectItem;

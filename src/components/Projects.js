import React, { Component } from 'react';


class ProjectListing extends Component {
    state = {}
    render() {
        return (
            <div>
                <img src={this.props.img} alt="thumbnail" className="project-list-img" />
                <h1>{this.props.title}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

export default ProjectListing;
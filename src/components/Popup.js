import React, { Component } from 'react';
import "../style/style.css";
import ProjectData from "../data/ProjectData"

class Popup extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {


        return (
            <div className='popup'>
                <div className='popup_content'>
                    <div className="imgBox">
                        <img src={ProjectData[this.props.activeCard - 1].img} alt="project"></img>

                    </div>
                    <h1>{ProjectData[this.props.activeCard - 1].description}</h1>
                    <a href={ProjectData[this.props.activeCard - 1].github} target="_blank" style={{ fontSize: "18px", color: "#000000" }}>View on Github</a>
                    <p onClick={this.props.closePopup} style={{ fontSize: "18px", position: "relative", top: "130px" }} className="close">Close</p>
                </div>
            </div>
        );
    }
}

export default Popup;
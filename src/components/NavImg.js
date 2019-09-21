import React, { Component } from 'react';
import ProjectData from "../data/ProjectData";
import Card from "./card"
import Popup from "./Popup.js"
import '../style/style.css'


class NavImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            projects: ProjectData
        }
    }

    togglePopup() {
        if (this.state.showPopup === false) {
            this.setState({ showPopup: true })
        } else {
            this.setState({ showPopup: false })
        }
    }


    render() {

        let navImages = this.state.projects.map(data =>
            <Card img={data.img} key={data.id} data_id={data.id} className="doubleBorder"
            />
        )

        return (
            <div onClick={this.togglePopup.bind(this)}>
                {navImages}
                {this.state.showPopup ?
                    <Popup
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}

export default NavImg;
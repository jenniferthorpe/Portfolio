import React, { Component } from 'react';
import ProjectData from "../data/ProjectData";
import Popup from "./Popup.js"
import Card from "./Card.js"
import '../style/style.css'


class NavImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            projects: ProjectData,
            activeCard: ""

        }
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(cardID) {
        this.setState({ activeCard: cardID })
    }

    togglePopup(e) {
        if (this.state.showPopup === false) {
            this.setState({ showPopup: true })

        } else {
            this.setState({ showPopup: false })
        }
    }


    render() {

        let navImages = ProjectData.map(data =>
            <div style={{ width: "35%" }} className="flexCenter">
                <Card onClick={() => this.handleCardClick(data.id)} img={data.img} key={data.id} data_id={data.id}
                />
            </div>

        )

        return (
            <div onClick={this.togglePopup.bind(this)}

                className="cardContainer flexCenter">
                {navImages}
                {this.state.showPopup ?
                    <Popup
                        text='Info om projektet'
                        closePopup={this.togglePopup.bind(this)}
                        activeCard={this.state.activeCard}
                    />
                    : null
                }
            </div>
        )
    }
}

export default NavImg;
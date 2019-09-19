import React, { Component } from 'react';
import "../style/style.css"

export default class ImgNav extends Component {
    render() {
        return (
            <div className="center">

                <div className="navContainer">
                    <img src={this.props.img} alt="Navigation" />

                </div>

            </div >
        )
    }
}


import React, { Component } from 'react';
import "../style/style.css";

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
                    <button onClick={this.props.closePopup}>close</button>
                    <h1>{this.props.text}</h1>
                </div>
            </div>
        );
    }
}

export default Popup;
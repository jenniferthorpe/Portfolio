import React, { Component } from 'react'
import '../style/style.css'


export default class Card extends Component {
    state = {

    }
    render() {

        return (

            <div
                onClick={this.props.onClick}
                className="card doubleBorder"

                style={{ backgroundImage: "url(" + this.props.img + ")" }}
            />
        )
    }
}
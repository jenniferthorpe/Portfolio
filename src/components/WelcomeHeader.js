import React, { Component } from 'react';
import "../style/style.css"


export default class WelcomeHeader extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.incOpacity);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.incOpacity);
    }

    incOpacity() {
        console.log("hej");
        let background = document.querySelector(".headerBg");
        let car = document.querySelector(".car");
        let start = window.innerHeight - 100;

        let opacity = 1 - window.scrollY / start;
        background.style.opacity = opacity;
        car.style.opacity = opacity;
        console.log(opacity);
    }

    render() {


        return (
            <div onScroll={this.incOpacity}>
                <header className="headerBg" ></header>
                <div className="car"></div>
            </div>

        )
    }

}

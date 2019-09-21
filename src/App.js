import React, { Component } from 'react';
import "./style/style.css";
import WelcomeHeader from './components/WelcomeHeader';
import NavImg from './components/NavImg';


class App extends Component {

    render() {

        return (
            <div>
                <WelcomeHeader id="start" />
                <NavImg id="projects" />

            </div >
        );
    }
}

export default App;


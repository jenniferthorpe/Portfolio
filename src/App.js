import React, { Component } from 'react';
import "./style/style.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import WelcomeHeader from './components/WelcomeHeader';
import NavImg from './components/NavImg';
import Contact from './components/Contact';
import MenuSvg from './images/menubg.svg';


class App extends Component {

    render() {

        const routing = (

            <Router>
                {/* <img src={MenuSvg} className="menuSvg" alt="menu background" /> */}
                <Link to="/" replace
                    className="menu"
                    style={{ right: 0, marginRight: "310px" }}>
                    <div>start</div>

                </Link>

                <Link to="/projects" replace
                    className="menu"
                    style={{ right: 0, marginRight: "220px" }}>
                    <div>projects</div>

                </Link>
                <Link to="/timeline" replace
                    className="menu"
                    style={{ right: 0, marginRight: "140px" }}>
                    <div>timeline</div>

                </Link>
                <Link to="/contact" replace
                    className="menu"
                    style={{ right: 0, marginRight: "70px" }}>
                    <div>contact</div>
                </Link>
                <Route path="/" exact render={props =>
                    <div>
                        <WelcomeHeader />
                        <NavImg />
                        <Contact />


                    </div>
                } />
                {/* <Route path="/projects" component={Projects} exact /> */}
                {/* <Route path="/" component={WelcomeHeader} exact />
                <Route path="/" component={WelcomeHeader} exact /> */}

            </Router>

        )
        return (
            <div>

                {routing}

            </div >
        );
    }
}

export default App;


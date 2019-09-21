import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "../style/style.css"
import Projects from "./Projects"

export default class WelcomeHeader extends Component {

    render() {
        return (
            <div>
                {/* <Router>

                    <nav>
                        <Link to="/" replace>
                            <div>start</div>

                        </Link>

                        <Link to="/projects" replace>
                            <div>"projects"</div>

                        </Link>
                        <Link to="/timeline" replace>
                            <div>timeline</div>

                        </Link>
                        <Link to="/contact" replace>
                            <div>contact</div>
                        </Link>
                    </nav>
                    <Route path="/" component={WelcomeHeader} exact />
                    <Route path="/projects" component={Projects} exact />
                    <Route path="/" component={WelcomeHeader} exact />
                    <Route path="/" component={WelcomeHeader} exact />
                </Router> */}


                <header className="headerBg"></header>

            </div>
        )
    }

}

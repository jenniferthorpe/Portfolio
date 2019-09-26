import React, { Component } from 'react';

class Contact extends Component {
    state = {}
    render() {

        return (
            <div className="ContactBox">
                <h1>Contact</h1>
                <h3>Jennifer Thorpe</h3>
                <h3>Phone: 0721 721 893</h3>
                <h3>Email: jenniiferthorpe@gmail.com</h3>
                <a href="http://www.linkedin.com/in/jennifer-thorpe-022749106/" target="_blank"><img src="http://jenniferthorpe.se/img/linkedin.png" alt="linkedin" className="logo" /></a>
                <a href="http://github.com/jenniferthorpe" target="_blank"><img src="http://jenniferthorpe.se/img/GitHub.png" alt="GitHub" className="logo" /></a>
            </div>
        );
    }
}

export default Contact;
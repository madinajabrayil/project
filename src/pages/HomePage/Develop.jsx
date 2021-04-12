import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
import './index.css'

class Develop extends Component {
    render() {
        return (
            <div className="bg">
                <div className="develop-section">
                    <div className="container">
                        <h1 className="develop-header">We Design and Develop</h1>
                        <p className="develop-text">We are a new design studio based in USA. We have
                            over 20 years of combined experience, and know a thing or two about designing
                            websites and mobiles apps.</p>
                        <button className="contact-us lets-talk">
                            <NavLink to="/contact">contact us</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Develop;
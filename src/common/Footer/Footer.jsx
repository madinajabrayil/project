import React, {Component} from 'react'
import './Footer.css'
import {BrowserRouter,NavLink} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
          <footer className="footer">
            <div className="container">
                <div className="flex">
                    <div className="copy-right">
                        <p className="footer-text">Piroll Design, Inc.</p>
                        <p className="copy">&copy 2017 Piroll. All rights reserved.</p>
                        <p className="copy">Designed by robirurk</p>
                    </div>
                    <div className="contact">
                        <p className="emailc">hello@pirolltheme.com</p>
                        <p className="number">+44 987 065 908</p>
                    </div>
                    <div className="footer-menu">
                        <BrowserRouter>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/project">Project</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
          </footer>
    
        )
    }
}

export default Footer;
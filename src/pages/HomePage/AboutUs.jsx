import React, {Component} from 'react'
import './index.css'
import sign from '../../img/signature.png'

class AboutUs extends Component {
    render() {
        return (
        <div className="about-us-section">
            <div className="container">
                <h2 className="about-header common-header">About Us</h2>
                <p className="about-text">Divide have don't man wherein air fourth. Own itself make have night won't make.<br/>
                    A you under Seed appear which good give. Own give air without fowl moveth dry
                    first heaven fruit, dominion she'd won't very all.</p>
                <div className="sign">
                    <img src={sign} alt="" className="sign-img"/>
                </div>
            </div>
        </div>
        )
    }
}

export default AboutUs;
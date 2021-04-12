import React, {Component} from 'react';
import './index.css'
import project from '../../img/projects.png'
import clock from '../../img/clock.png'
import star from '../../img/services-star.png'
import like from '../../img/like.png'

class Information extends Component {
    render() {
        return (
            <section className="information-section">
                <div className="info-item">
                    <div className="info-icon">
                        <img src={project} alt=""/>
                    </div>
                    <div className="info-text">
                        <p className="count">548</p>
                        <p className="info-head">Projects Completed</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-icon">
                        <img src={clock} alt=""/>
                    </div>
                    <div className="info-text">
                        <p className="count">1465</p>
                        <p className="info-head">Working hours</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-icon">
                        <img src={star} alt=""/>
                    </div>
                    <div className="info-text">
                        <p className="count">612</p>
                        <p className="info-head">Positive feedbacks</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-icon">
                        <img src={like} alt=""/>
                    </div>
                    <div className="info-text">
                        <p className="count">735</p>
                        <p className="info-head">Happy clients</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Information;
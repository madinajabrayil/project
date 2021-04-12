import React, {Component} from 'react'
import './index.css'
import profimg from '../../img/ph2.jpg'
class ProfSkills extends Component{
    render(){
        return(
            <section className="prof-skills-img">
            <section className="professional-skills">
                <div className="container">
                    <h2 className="prof-header common-header">Professional Skills
                    </h2>
                    <div className="percent">
                        <h3 className="per-header">UI/UX Design</h3>
                        <span className="per">75%</span>
                        <div className="out-slider">
                            <div className="firstinside-slider design"></div>
                        </div>
                    </div>

                    <div className="percent">
                        <h3 className="per-header">Web development</h3>
                        <span className="per">90%</span>
                        <div className="out-slider">
                            <div className="inside-slider web"></div>
                        </div>
                    </div>

                    <div className="percent">
                        <h3 className="per-header">Marketing</h3>
                        <span className="per">65%</span>
                        <div className="out-slider">
                            <div className="inside-slider marketing"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="img-section">
                <img src={profimg} alt=""/>
            </section>
        </section>
        )
    }
}

export default ProfSkills;
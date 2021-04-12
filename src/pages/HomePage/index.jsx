import React, {Component} from 'react'
import './index.css';
import {NavLink} from 'react-router-dom';
import {Carousell} from './Carousel/Carousel'
import Develop from './Develop'
import AboutUs from './AboutUs'
import ProfSkills from './ProffSkills'
import Information from './Information'
import LoadMore from './LoadMore'
import WorkProcess from './WorkProcess'
import InfoItems from './InfoItems'
import Client from './Client'
import Form from './Form'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Develop/>
                <AboutUs/>
                <ProfSkills/>
                <Information/>
                <section className="load-more">
                    <LoadMore/>
                    <button className="load-more-btn">
                        <NavLink to='/project'>
                            Load more work</NavLink>
                    </button>
                </section>
                <WorkProcess/>
                <InfoItems/>
                <Carousell/>
                <Client/>
                <section className="project">
                    <div className="container">
                        <h3 className="project-header common-header">Need a Project?</h3>
                        <p className="process-text">Let us know what you're looking for in an agency. We'll take a look and see
                            if this could be the start of something beautiful</p>
                        <Form/>
                    </div>
                </section>
            </div>
        )

    };
}
export default HomePage;
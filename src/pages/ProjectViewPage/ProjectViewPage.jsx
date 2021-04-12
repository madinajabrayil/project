import React, {Component} from 'react'
// import axios from 'axios';
import './ProjectViewPage.css'
import '../HomePage/index.css'
// import glass from '../../img/glass.jpg'
import {NavLink} from 'react-router-dom';
import {FaChevronLeft, FaChevronRight, FaThLarge} from 'react-icons/fa';

class ProjectViewPage extends Component {
    state = {
        projects: [],
        counter: this.props.match.params.id,
        isLoading: true

    }

    fetchData(item) {
        fetch(
            `http://my-json-server.typicode.com/madinajabrayil/fake-server/projects/` +
            this.state.counter
        )
            .then(res => res.json())
            .then((item) => {
                this.setState({projects: item, isLoading: false})
                console.log(this.state.projects)
            })
            .catch(err => {
                console.log(err => this.state({err, isLoading: false}));
            });
        if (item === 'next') {
            if (this.state.counter === 12) {
                this.setState(() => {
                    return {counter: 1}
                })
            } else {
                this.setState(prevState => {
                    return {
                        counter: +prevState.counter + 1
                    }
                })
            }
        }

        if (item === 'prev') {
            if (this.state.counter === 1) {
                this.setState(() => {
                    return {counter: 12}
                })
            } else {
                this.setState(prevState => {
                    return {
                        counter: +prevState.counter - 1
                    }
                })
            }
        }
    }

    componentDidMount() {

        this.fetchData();
    }
    render() {
        return (
            <div>
                <section className="project-single">
                    <div className="flex " id=" project ">
                        <div className="project-info ">

                            <h3 className="contact-header common-header " id="contact-header">{this.state.projects.header}</h3>
                            <p className="contact-text " id="contact-text">{this.state.projects.text}</p>
                            <p className="commun ">
                                <span className="colorbl ">Client:</span>
                                {this.state.projects.client}</p>
                            <p className="commun ">
                                <span className="colorbl ">Date:</span>
                                {this.state.projects.date}</p>
                            <p className="commun ">
                                <span className="colorbl ">Share:</span>
                                Facebook, Twitter, Pinterest</p>

                        </div>

                        <div className="img-side ">
                            <img src={this.state.projects.image} id="page-img"/>
                        </div>
                    </div>

                </section>
                <div className="change">
                    <NavLink
                        className="main-nav-link"
                        to={'/projectview/' + this.state.counter}
                        onClick={() => this.fetchData('prev')}>
                        <button className="btn prev">
                            <FaChevronLeft/>
                            Previous project</button>
                    </NavLink>
                    <NavLink to='/project' className="main-nav-link">
                        <div className="select"><FaThLarge/></div>
                    </NavLink>
                    <NavLink
                        className="main-nav-link"
                        to={'/projectview/' + this.state.counter}
                        onClick={() => this.fetchData('next')}>
                        <button className="btn next">Next project<FaChevronRight/></button>
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default ProjectViewPage;
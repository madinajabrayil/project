import React, {Component} from 'react'
import '../HomePage/index.css'
import './Buttons.jsx'
import {NavLink} from 'react-router-dom';
import {FaChevronLeft, FaChevronRight, FaThLarge} from 'react-icons/fa';

class Buttons extends Component {
    render() {
        return (
            <div className="change">
                <NavLink
                    to={'/projectview/' + this.state.counter}
                    onClick={() => this.fetchData('prev')}>
                    <button className="btn prev">
                        <FaChevronLeft/>
                        Previous project</button>
                </NavLink>
                <NavLink to='/project'>
                    <div className="select"><FaThLarge/></div>
                </NavLink>
                <NavLink
                    to={'/projectview/' + this.state.counter}
                    onClick={() => this.fetchData('next')}>
                    <button className="btn next">Next project<FaChevronRight/></button>
                </NavLink>
            </div>
        )
    }
}

export default Buttons;
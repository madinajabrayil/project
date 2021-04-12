import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.css'
import hover from '../../img/hover.png'
import glass from '../../img/glass.jpg'
import note from '../../img/note.jpg'
import phone from '../../img/phone.jpg'
import honey from '../../img/honey.jpg'
import bottle from '../../img/bottle.jpg'

class LoadMore extends Component {
    render() {
        return (
                <div className="more-items">
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${glass})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/1'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${note})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/2'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${phone})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/3'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${honey})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/4'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${bottle})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/5'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${honey})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/6'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${glass})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/7'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                    <div
                        className="preview"
                        style={{
                            backgroundImage: `url(${note})`
                        }}>
                        <div className="hover">
                            <NavLink to='/projectview/8'>
                                <img className="hover-img" src={hover} alt=""/></NavLink>
                        </div>
                    </div>
                </div>
        )
    }
}

export default LoadMore;

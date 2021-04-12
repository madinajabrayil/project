import React, {Component} from 'react'
import './ProjectPage.css'
import '../HomePage/index.css'
import {NavLink} from 'react-router-dom';
import hover from '../../img/hover.png'
import glass from '../../img/glass.jpg'
import note from '../../img/note.jpg'
import phone from '../../img/phone.jpg'
import honey from '../../img/honey.jpg'
import bottle from '../../img/bottle.jpg'

class ProductPage extends Component {
    render() {
        return (

            <div>
                <section className="designer-section common-section ">
                    <div className="container ">
                        <h2 className="designer-header common-header ">UI/UX Graphic Designer</h2>
                        <p className="designer-text common-text ">I am a Graphic & Web Designer based in New
                            York, specializing in User Interface Designer and Development</p>
                    </div>
                </section>

                <section className="load-more ">
                    <div className="more-items">
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${glass})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/1'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${note})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/2'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${phone})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/3'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${honey})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/4'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${bottle})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/5'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${honey})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/6'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${glass})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/7'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${note})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/8'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${note})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/9'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${glass})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/10'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${phone})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/11'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                        <div
                            className="preview"
                            style={{
                                backgroundImage: `url(${glass})`
                            }}>
                            <div className="hover hoverblue">
                                <NavLink to='/projectview/12'>
                                    <img className="hover-img" src={hover} alt=""/></NavLink>
                            </div>
                        </div>
                    </div>
                </section>
        
            </div>
        )
    }
}


export default ProductPage;
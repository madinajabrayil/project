import React, {Component} from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.png'
import bg from '../../img/ph1.jpg'
// import {HamburgerButton} from 'react-hamburger-button';

class Header extends Component {
    handleClick() {
        var burger = document.querySelector('.burger-btn');
        var menu = document.querySelector('.menu');

        burger
            .classList
            .toggle('active')
        menu
            .classList
            .toggle('active')

    }

    render() {
      
        return (
            <div className="bg1">
                <header className="header">
                    <div className="container">
                        <div className="flex">
                            <div className="logo">
                                <NavLink to="/home"><img src={logo} className="header-logo" alt=""/></NavLink>
                            </div>
                            <nav className="menu-nav">
                                <ul className="menu">
                                    <NavLink to='/home' activeClassName="active" className="main-nav-link">Home</NavLink>
                                    <NavLink to='/about' activeClassName="active" className="main-nav-link">About</NavLink>
                                    <NavLink to='/project' activeClassName="active" className="main-nav-link">Project</NavLink>
                                    <NavLink to='/contact' activeClassName="active" className="main-nav-link">Contact</NavLink>
                                </ul>
                                <div className="menu-icon">
                                    <button onClick={this.handleClick} className="burger-btn">
                                        <span className="color"></span>
                                    </button>
                                </div>

                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

}

export default Header;
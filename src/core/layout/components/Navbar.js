import React, {Component}from 'react';
import registerIcons from "../../components/fontawesome.js"
import './Styles/Navbar.css';
registerIcons();

class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-sm navbar-light headroom headroom--not-bottom headroom--pinned headroom--top">
        <div className="container">
            <a className="navbar-brand" href="index.html"><i className="uil uil-user"></i> Inicio </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#about" className="nav-link"><span data-hover="About">About</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="nav-link"><span data-hover="Projects">Projects</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" className="nav-link"><span data-hover="Resume">Resume</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>
                </ul>

                
            </div>
        </div>
    </nav>
        );
    }
}

export default Navbar;
import React, {Component}from 'react';
import {Link} from "react-router-dom";
// import {Logo} from '../../../logo.svg';
import gamer from '../../../assets/img/gamer.png';

class Navbar extends Component {
    render() { 
        return ( 
            <nav  className="header_">
                <div className="selection_ header-icons-container">
                    <div className="icons">
                        <Link to="/"><span className="flaticon-001-facebook"></span></Link>
                        <Link to="/"><span className="flaticon-002-twitter"></span></Link>
                        <Link to="/"><span className="flaticon-011-instagram"></span></Link>
                        <Link to="/"><span className="flaticon-010-linkedin"></span></Link>
                        <Link to="/"><span className="flaticon-008-youtube"></span></Link>
                    </div>
                </div>
                <div className="nav_">
                    <div className="selection_ nav-logo-container">
                       <Link to="/"> <img src={gamer} alt="Logo de mi blog"/> Mi blog</Link>
                    </div>
                    <div className="selection_ profile-link">
                        <Link to="">Sobre mi</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
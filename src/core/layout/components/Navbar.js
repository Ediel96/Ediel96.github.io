import React, {Component}from 'react';
import {Link} from "react-router-dom";
import gamer from '../../../assets/img/gamer.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import registerIcons from "../../components/fontawesome.js"
import './Styles/Navbar.css';
registerIcons();

class Navbar extends Component {
    render() { 
        return ( 
            <nav  className="header_">
                <div className="selection_ header-icons-container">
                    <div className="icons">
                        <Link to="/"><FontAwesomeIcon
                            className="icon"
                            icon={["fab", "github"]}
                            size="3x"/>
                        </Link>

                        <Link to="/"><FontAwesomeIcon
                            className="icon"
                            icon={["fab", "twitter"]}
                            size="3x"/>
                        </Link>

                        <Link to="/"><FontAwesomeIcon
                            className="icon"
                            icon={["fab", "linkedin"]}
                            size="3x"/>
                        </Link>

                    </div>
                </div>
                <div className="nav_">
                    <div className="selection_ nav-logo-container">
                        <Link to="/blog"> <img src={gamer} alt="Logo de mi blog"/> Mi blog</Link>
                    </div>
                    <div className="selection_ profile-link">
                        <Link to="/my-skim">Sobre mi</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
import React from 'react';
import './style/Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import registerIcons from "../core/components/fontawesome.js";
import Particle from "../core/components/Particles";
registerIcons();


function Home() {
    return (
    <div className="App">
      <div className="App-header">
        <h1 className='text-titule'>Hamilton Ediel Acevedo</h1>

        <h2 className='text-subtitule'>Developer</h2>

        <div>
            <span className="bubble">
                <a
                href="https://github.com/Ediel96"
                target="_blank " rel="noopener noreferrer" style = {{color:"#FFF"}}>
                <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "github"]}
                    size="3x"
                />
                <span className="icon_title">Github</span>
                </a>
            </span>

            <span className="bubble">
                <a href="https://www.linkedin.com/in/hamilton-acevedo-5b6990141/" 
                target="_blank " rel="noopener noreferrer"  style = {{color:"#FFF"}}>
                <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "linkedin"]}
                    size="3x"
                />
                <span className="icon_title">LinkedIn</span>
                </a>
            </span>

            {/* <span className="bubble">
                <a href="resume.pdf" target="_blank " rel="noopener noreferrer" style = {{color:"#FFF"}}>
                    <FontAwesomeIcon
                    className="icon"
                    icon={["fas", "file-alt"]}
                    size="3x"
                    />
                    <span className="icon_title">Resume</span>
                </a>
            </span>

            <span className="bubble">
                <a href="mailto:h.amiltone.diel@gmail.com" target="_blank " rel="noopener noreferrer" style = {{color:"#FFF"}}>
                    <FontAwesomeIcon
                    className="icon"
                    icon={["fas", "envelope"]}
                    size="3x"
                    />
                    <span className="icon_title">Resume</span>
                </a>
            </span> */}
        </div>

        <h2 className="button-home"><Link to="/blog" style = {{color:"#FFF"}}>Ver mas</Link></h2> 

    </div>

    <Particle />
    </div>
    );
}

export default Home;

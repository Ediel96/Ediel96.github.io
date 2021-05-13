import React, {Component}from 'react';
import {Link} from "react-router-dom"

class Navbar extends Component {
    render() { 
        return ( 
            <div  className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/home">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Dashboard</Link>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Navbar;
import React, { Component} from 'react';
// import './style/Home.css';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';




export default class Home extends Component {
    render() { 

        const styles = {
            root: {
                fontFamily: "sans-serif",
                textAlign: "center",
                height: "100%",
                background: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        };
        

        return ( 
            <div style={styles.root}>
                <Particles />
            </div>
        );
    }
}

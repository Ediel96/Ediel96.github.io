import React, { Component} from 'react';
import Navbar from '../core/layout/Layout';

// import MyProjectMain from '../core/components/MyProjectMain';
// import { projects } from '../data/myProyect'

import  Profiler  from '../core/components/Profile';
import MyProjectMain from '../core/components/MyProjectMain';
import Experience from '../core/components/Experiences'
import Contact from '../core/components/Contact'


import Skill from '../core/components/Skill.js';
import '../assets/style/tooplate-style.css';

class Blogs extends Component {
    state = {  }
    render() { 
        return (
                <body className="dark-mode body-container">
                    <Navbar/>
                    <Profiler/>
                    <Skill/>
                    <MyProjectMain/>
                    <Experience/>
                    <Contact/>
                </body>
        );
    }
}

export default Blogs;
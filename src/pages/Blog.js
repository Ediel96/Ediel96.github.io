import React from 'react';
import Navbar from '../core/layout/Layout';
import './style/Blog.css';

class Blog extends React.Component {

    render() { 
        return ( 
            <>
                <Navbar/>
                <h4>Component Blog</h4>
            </>
        );
    }
}

export default Blog;
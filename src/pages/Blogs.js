import React, { Component} from 'react';
import Navbar from '../core/layout/Layout';
import MyProjectMain from '../core/components/MyProjectMain';
import { projects } from '../data/myProyect'

class Blogs extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Navbar/>
                <div>
                    <h2>Hel</h2>
                </div>
                {projects.map((data)=>{
                    <MyProjectMain 
                        id={data.id}
                        name ={data.name}
                        description={data.description}
                        url={data.url}
                        img={data.img}
                    />
                })}
            </>
        );
    }
}

export default Blogs;
import React, { Component } from 'react';
import './style/Skill.css'



//imagenes front-end
import imgCCS from '../../assets/img/inconDeveloper/css.png';
import imgHTML from '../../assets/img/inconDeveloper/html.png';
import imgjavascript from '../../assets/img/inconDeveloper/javascript.png';
import imgReact from '../../assets/img/inconDeveloper/react2.png';
import imgAngular from '../../assets/img/inconDeveloper/angular.png';


//imagenes back-end
import imgJava from '../../assets/img/inconDeveloper/java.png';
import imgSpring from '../../assets/img/inconDeveloper/spring-boot.png';
import imgNode from '../../assets/img/inconDeveloper/node2.png';
import imgPython from '../../assets/img/inconDeveloper/python.png';



class Skill extends Component {
  render() {
    return (
        <section className="project py-5" id="skill">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-11 text-center mx-auto col-12">

                        <div className="col-lg-8 mx-auto m-8">
                            <h2>Habilidades</h2>
                        </div>

                        <div className="row">

                            <div className="col-lg-6 col-12">
                                <h3 className="mb-4">Front-end Developer</h3>

                                <div className='row'>
                                    <div className='col-6'>
                                        <img className='img-w' src={imgHTML} alt='imgane de html'/>
                                        <h5 className=''>HTML</h5>
                                        <p className=''>Intermedio</p>
                                    </div>

                                    <div className='col-6'>
                                        <img className='img-w' src={imgCCS} alt='imgane de html'/>
                                        <h6>CSS</h6>
                                        <p>Intermedio</p>
                                    </div>

                                    <div className='col-6'>
                                        <img className='img-w' src={imgjavascript} alt='imgane de html'/>
                                        <h6>JavaScript</h6>
                                        <p>Intermedio</p>
                                    </div>

                                    <div className='col-6'>
                                        <img className='img-w' src={imgReact} alt='imgane de html'/>
                                        <h6>React</h6>
                                        <p>Basico</p>
                                    </div>
                                    
                                    <div className='col-6'>
                                        <img className='img-w' src={imgAngular} alt='imgane de html'/>
                                        <h6>Angular</h6>
                                        <p>Intermedio</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6 col-12">
                                <h3 className="mb-4">Back-end Developer</h3>

                                <div className='row'>
                                    <div className='col-6'>
                                        <img className='img-w' src={imgJava} alt='imgane de html'/>
                                        <h5 className=''>Java</h5>
                                        <p className=''>Intermedio</p>
                                    </div>

                                    <div className='col-6'>
                                        <img className='img-w' src={imgSpring} alt='imgane de html'/>
                                        <h5 className=''>Java</h5>
                                        <p className=''>Intermedio</p>
                                    </div>

                                    <div className='col-6'>
                                        <img className='img-w' src={imgNode} alt='imgane de html'/>
                                        <h5 className=''>Node</h5>
                                        <p className=''>Intermedio</p>
                                    </div>

                                    <div className='col-6'>
                                        <img className='img-w' src={imgPython} alt='imgane de html'/>
                                        <h5 className=''>Python</h5>
                                        <p className=''>Basico</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Skill;
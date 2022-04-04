import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Skill extends Component {
  render() {
    return (
        <section className="project py-5" id="project">
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

                                        <i><FontAwesomeIcon
                                            className="icon"
                                            icon={["fab", "twitter"]}
                                            size="2x"/>
                                        </i>
                                        <p>HTML</p>

                                    </div>

                                    <div className='col-6'>
                                        <h6>CSS</h6>
                                    </div>

                                    <div className='col-6'>
                                        <h6>JavaScript</h6>
                                    </div>

                                    <div className='col-6'>
                                        <h6>React</h6>
                                    </div>

                                    <div className='col-6'>
                                        <h6>Angular</h6>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6 col-12">
                                <h3 className="mb-4">Back-end Developer</h3>
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
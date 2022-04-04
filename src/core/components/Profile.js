import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import profile from '../../assets/img/profile/profile.jpg';

class Profile extends Component {

  render() {
    return (
        <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text">Bienvenido a <span className="mobile-block">mi portafolio!</span></small>
                        <h1 className="animated animated-text">
                            <span className="mr-2">Yo soy desarrollado web.</span>
                                <div className="animated-info">
                                    <span className="animated-item">Backend.</span>
                                    <span className="animated-item">Front-end.</span>
                                </div>
                        </h1>

                        <p> Me gusta los retos en los que como desarrollador web puede aprender cada día, 
                            conocer persona a la cuales pueda aprender de ellos, pienso que uno puede aprender de las personas no importa a que se dedique 
                            siempre teda de un punto de vista que uno no puede ver. </p>
                        
                        {/* <div className="custom-btn-group mt-4">
                          <Link to="inicio" className="btn mr-lg-2 custom-btn"><i className="uil uil-file-alt"></i> Download Resume</Link>
                          <Link to="inicio" className="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</Link>
                        </div> */}
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
                    <div className="about-image svg">
                         <img src={profile} className="img-fluid" alt="foto sobre mi"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
  }
}

export default Profile;
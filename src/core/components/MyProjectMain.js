import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './style/myProjectMain.css'

import imagen1 from '../../assets/img/proyect/Spring-MVC-AngularJS.webp';
import imagen2 from '../../assets/img/proyect/docker.jpg';



class MyProjectMain extends Component {

  

  render() {

    // const urlImg  = 'https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg'
    // const urlImg2 = 'https://raw.githubusercontent.com/Ediel96/Spring-bootApi-Udemy/master/img/maxresdefault.jpg'; 


      return (
        <section className="project py-5" id="project">
        <div className="container">
                
                <div className="row">
                  <div className="col-lg-11 text-center mx-auto col-12">

                      <div className="col-lg-8 mx-auto m-8">
                        <h2>Lista de proyectos realizados por mí.</h2>
                      </div>

                      <div className="row">

                        <div className='col-sm-6'>
                            <div className="card" >
                              <div className="card-body">
                              <img className='card-img-top'  src={imagen1} alt="spring boot y angular proyecto personal"/>
                                <h5 className="card-title">Registrar se usuario con lo autenticación de JWT.</h5>
                                <p className="card-text">Es una aplicación con registro de usuarios donde se puede actualizar, agregar y eliminar y el backend este hecho en spring boot y el front en angular.</p>
                                <a href="https://github.com/Ediel96/udemy_spring_boot_parcticando" className="btn btn-primary">Repositorio</a>
                              </div>
                            </div>
                        </div>

                          <div className='col-sm-6'>
                              <div className="card" >
                                <div className="card-body">
                                  <img className='card-img-top'  src={imagen2} alt="spring boot y angular proyecto personal"/>
                                  <h5 className="card-title">Docker</h5>
                                  <p className="card-text">Este proyecto tiene como objetivo un ambiente de contenedor hecho en Docker para el funcionamiento del backend con la base de datos en él, para realizar su respectivo servicio donde el usuario puede utilizarlo de la mejor manera.</p>
                                  <a href='https://github.com/Ediel96/Spring-bootApi-Udemy' className="btn btn-primary">Repositorio</a>
                                </div>
                              </div>
                          </div>

                      </div>

                        

                  </div>
                </div>
        </div>
    </section>
      )
    
  }
}

export default MyProjectMain;

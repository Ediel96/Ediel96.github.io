import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
        <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12">
                  <h2 className="mb-4">Experiencia</h2>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>2021</span>
                             </div>
                             <div className="timeline-info">
                                  <h3><span>Analista de sistemas Junior</span><small>Asesoftware</small></h3>
                                  <p>-	A lo largo de mi estadía en la empresa me ha permitido participar en dos proyectos dando me la oportunidad de aprender y mejorar mi experiencia en el desarrollo web en la tecnología como angular, spring boot y manejo de control de versiones.</p>
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2019</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Desarrollador Web</span><small>Spira</small></h3>
                                <p>En lo que estuve en el cargo de desarrollador web tuve grandes retos participar en un proyecto individuales manejando tecnología como php con laravel y angular para aplicación PWA.</p>
                            </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2018</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Aprendiz</span><small>Intergrupo</small></h3>
                                <p>Me permitió aprender sobre el mundo del desarrollo donde conocí herramienta para el desarrollo de tecnología como Angular, Xamarin, .NetCore y React, donde me abrió a un mundo de tecnología y aprendizaje para mi futuro.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                  <h2 className="mb-4 mobile-mt-2">Educación</h2>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>2021</span>
                             </div>
                             <div className="timeline-info">
                                  <h3><span>Ingeneria de Sistemas</span><small>ECCI</small></h3>
                                  <p>Ingeniería de Sistemas fue diseñado para concebir, diseñar, implementar y operar sistemas y proyectos de TI basados en software, 
                                      orientados a la solución de problemáticas específicas de los sectores públicos o privados, 
                                      que demanden la implementación de alternativas de mejoramiento o producción de conocimiento frente a los procesos que desarrollan.
                                    </p>
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2018</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Tecnólogo en Desarrollo Informático</span><small>ECCI</small></h3>
                                <p>Tecnología en Desarrollo Informático será capaz de planear, analizar, diseñar y desarrollar sistemas de información, 
                                    mantener y configurar equipos de cómputo e implementar redes de computadores y gestionar Sistemas deTecnologías de la Información 
                                    para aplicación comercial, industrial y de ingeniería que cumplan con los requerimientos delas organizaciones y los estándares 
                                    internacionales.
                                </p>
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

export default Experience;
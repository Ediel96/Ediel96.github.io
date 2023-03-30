import React from 'react'

export const Experience = () => {


const experience =[
    {
        title:'Analista de sistemas intermedio',
        location:'Asesoftware',
        description:'A lo largo de mi estadía en la empresa me ha permitido participar en dos proyectos dando me la oportunidad de aprender y mejorar mi experiencia en el desarrollo web en la tecnología como angular, spring boot y manejo de control de versiones.',
        year : 2023
    },{
        title:'Desarrollador Web',
        location:'Spira',
        description:'En lo que estuve en el cargo de desarrollador web tuve grandes retos participar en un proyecto individuales manejando tecnología como php con laravel y angular para aplicación PWA.',
        year : 2019
    },{
        title:'Aprendiz',
        location:'Intergrupo',
        description:'Me permitió aprender sobre el mundo del desarrollo donde conocí herramienta para el desarrollo de tecnología como Angular, Xamarin, .NetCore y React, donde me abrió a un mundo de tecnología y aprendizaje para mi futuro.',
        year : 2018
    }
]

const education =[
    {
        title:'Ingeneria de Sistemas',
        location:'ECCI',
        description:'Ingeniería de Sistemas fue diseñado para concebir, diseñar, implementar y operar sistemas y proyectos de TI basados en software, orientados a la solución de problemáticas específicas de los sectores públicos o privados, que demanden la implementación de alternativas de mejoramiento o producción de conocimiento frente a los procesos que desarrollan.',
        year : 2021
    },
    {
        title:'Tecnólogo en Desarrollo Informático',
        location:'ECCI',
        description:'Tecnología en Desarrollo Informático será capaz de planear, analizar, diseñar y desarrollar sistemas de información, mantener y configurar equipos de cómputo e implementar redes de computadores y gestionar Sistemas deTecnologías de la Información para aplicación comercial, industrial y de ingeniería que cumplan con los requerimientos delas organizaciones y los estándares internacionales.',
        year : 2018
    }
]

return (
<section className="skill" id="experience">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    {/* <h2>Experiencia</h2> */}
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h2 className="mb-4">Experiencia</h2>
                            <div className="timeline">

                                {experience.map((exper, index) => {
                                    return (
                                        <div className="timeline-wrapper" key={index}>
                                            <div className="timeline-yr"><span>{exper.year}</span></div>
                                            <div className="timeline-info">
                                                 <h3><span>{exper.title}</span><small>{exper.location}</small></h3>
                                                <p>- {exper.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <h2 className="mb-4 mobile-mt-2">Educación</h2>
                            <div className="timeline">

                            {education.map((exper, index) => {
                                return (
                                    <div className="timeline-wrapper" key={index}>
                                        <div className="timeline-yr"><span>{exper.year}</span></div>
                                        <div className="timeline-info">
                                                <h3><span>{exper.title}</span><small>{exper.location}</small></h3>
                                            <p>- {exper.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
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

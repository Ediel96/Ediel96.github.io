import React from 'react'

export const Experience = () => {


const experience =[
    {
        title:'Full Stack Developer',
        location:'Vass LATAM · Sector Bancario · Remoto',
        description:'Disene y desarrolle microservicios escalables con NestJS y Java bajo arquitectura hexagonal. Integre servicios con Salesforce, implemente despliegues en AWS, contenedores con Docker, orquestacion con Kubernetes e infraestructura con Terraform. Tambien realice monitoreo con Dynatrace y Elastic Stack, soporte productivo y optimizacion de servicios criticos.',
        year : '2023-2026'
    },{
        title:'Semi Senior Developer',
        location:'Asesoftware · Sector Tecnologico · Remoto',
        description:'Desarrolle aplicaciones empresariales con Spring Boot y Angular. Implemente y consumi APIs REST, disene soluciones basadas en microservicios, gestione bases de datos PostgreSQL, Oracle y PostGIS, y desplegue aplicaciones en Azure.',
        year : '2021-2023'
    },{
        title:'Junior Developer',
        location:'Spira · Bogota',
        description:'Desarrolle aplicaciones web y modulos frontend con Angular, implemente funcionalidades backend con Laravel, gestione bases de datos MySQL y participe en el desarrollo de aplicaciones tipo PWA.',
        year : '2019-2020'
    }
]

const education =[
    {
        title:'Ingenieria de Sistemas',
        location:'ECCI · Bogota',
        description:'Formacion orientada al diseno, implementacion y operacion de sistemas de informacion y proyectos de tecnologia basados en software.',
        year : '2018-2021'
    },
    {
        title:'Tecnólogo en Desarrollo Informático',
        location:'ECCI · Bogota',
        description:'Formacion tecnica en planeacion, analisis, diseno y desarrollo de sistemas de informacion para aplicaciones comerciales e industriales.',
        year : '2015-2018'
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

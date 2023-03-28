import React from 'react'

export const Experience = ({experience , education}) => {
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

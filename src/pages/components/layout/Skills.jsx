import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../../assets/img/color-sharp.png";
import {
    Braces,
    Cloud,
    CodeSlash,
    Database,
    Diagram3,
    Git,
    HddNetwork,
    ShieldCheck,
    Terminal,
} from "react-bootstrap-icons";


export const Skills = () => {
  const skillGroups = [
    {
      title: 'Backend',
      icon: HddNetwork,
      tools: 'Node.js · NestJS · Java 17/21 · Spring Boot · APIs REST · Microservicios · Arquitectura hexagonal',
    },
    {
      title: 'Frontend',
      icon: CodeSlash,
      tools: 'Angular · React · TypeScript · JavaScript · HTML · CSS',
    },
    {
      title: 'Bases de datos',
      icon: Database,
      tools: 'MongoDB · PostgreSQL · Oracle · MySQL',
    },
    {
      title: 'DevOps / Cloud',
      icon: Cloud,
      tools: 'AWS · Docker · Kubernetes · Terraform · OpenShift · Azure',
    },
    {
      title: 'Calidad / Testing',
      icon: ShieldCheck,
      tools: 'Pruebas unitarias · Clean Code · Documentacion tecnica · Checkmarx',
    },
    {
      title: 'Herramientas',
      icon: Git,
      tools: 'Git · Elastic Stack · Dynatrace · Scrum · Code Review',
    },
    {
      title: 'Arquitectura',
      icon: Diagram3,
      tools: 'Microservicios · Arquitectura hexagonal · Sistemas escalables · Integracion de APIs',
    },
    {
      title: 'Lenguajes',
      icon: Braces,
      tools: 'JavaScript · TypeScript · Java · SQL',
    },
    {
      title: 'Operaciones',
      icon: Terminal,
      tools: 'Incidentes en produccion · Monitoreo · Analisis de logs · Optimizacion',
    },
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <span className="section-kicker">Herramientas</span>
                        <h2>Stack tecnico</h2>
                        <p className="skill-intro">
                            +7 anos creando aplicaciones empresariales, microservicios e integraciones para entornos bancarios y tecnologicos.
                        </p>
                        <div className="skills-grid">
                            {skillGroups.map(({ title, tools, icon: Icon }) => (
                                <article className="skill-card" key={title}>
                                    <span className="skill-icon"><Icon /></span>
                                    <h3>{title}</h3>
                                    <p>{tools}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

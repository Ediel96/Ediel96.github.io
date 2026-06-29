import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../../assets/img/color-sharp2.png";

import imgDocker from '../../../assets/eddi/img/project/docker.jpg';
import imgSpringAngular from '../../../assets/eddi/img/project/Spring-MVC-AngularJS.png'

import TrackVisibility from 'react-on-screen';

const TrackVisibilityBox = TrackVisibility.default || TrackVisibility;

export const Projects = () => {

  const projects = [
    {
        id:1,
        title:'Microservicios bancarios', 
        description: 'Desarrollo de servicios backend escalables con NestJS y Java bajo arquitectura hexagonal. Integracion con Salesforce, monitoreo con Dynatrace y despliegue en AWS con Docker, Kubernetes y Terraform.',
        imgUrl: imgSpringAngular,
        link:'https://github.com/Ediel96',
        linkView: ''
    },
    {
        id:2,
        title:'Arquitectura cloud y monitoreo', 
        imgUrl: imgDocker,
        description: 'Implementacion de despliegues en AWS utilizando contenedores y orquestacion. Analisis de logs, monitoreo de rendimiento y soporte de servicios criticos en entornos productivos.',
        link:'https://github.com/Ediel96',
        linkView: ''
    },
]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibilityBox>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <span className="section-kicker">Proyectos</span>
                <h2 className="m-2">Trabajo seleccionado</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                    <Nav.Item>
                      <Nav.Link eventKey="first">Aplicaciones</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibilityBox>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

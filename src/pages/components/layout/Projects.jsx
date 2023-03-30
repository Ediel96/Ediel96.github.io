import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../../assets/img/color-sharp2.png";

import imgDocker from '../../../assets/eddi/img/project/docker.jpg';
import imgSpringAngular from '../../../assets/eddi/img/project/Spring-MVC-AngularJS.png'

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
        id:1,
        title:'Registrar se usuario con lo autenticación de JWT.', 
        description: 'Es una aplicación con registro de usuarios donde se puede actualizar, agregar y eliminar y el backend este hecho en spring boot y el front en angular.',
        imgUrl: imgSpringAngular,
        link:'https://github.com/Ediel96/udemy_spring_boot_parcticando',
        linkView: ''
    },
    {
        id:2,
        title:'Docker', 
        imgUrl: imgDocker,
        description: 'Este proyecto tiene como objetivo un ambiente de contenedor hecho en Docker para el funcionamiento del backend con la base de datos en él, para realizar su respectivo servicio donde el usuario puede utilizarlo de la mejor manera.',
        link:'https://github.com/Ediel96/Spring-bootApi-Udemy',
        linkView: ''
    },
]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="m-2">Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
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
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

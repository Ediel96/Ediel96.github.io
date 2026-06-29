import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import imgPerfil from  '../../../assets/eddi/img/pefil-platzi.jpg';

const TrackVisibilityBox = TrackVisibility.default || TrackVisibility;



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  
  const period = 2000;

  const info = {
    name : 'Hamilton Acevedo Avila',
    title : 'Desarrollador Full Stack',
    description : 'Desarrollador Full Stack con +7 anos de experiencia creando aplicaciones empresariales y microservicios para sectores bancarios y tecnologicos. Especializado en Node.js, NestJS, Java y Spring Boot, con despliegues en AWS, Docker y Kubernetes.',
    role : ["Node.js", "NestJS", "Spring Boot", "AWS"],
    img :imgPerfil
  }

  const toRotate = info.role;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center g-5">
          <Col xs={12} lg={5}>
            <TrackVisibilityBox>
              {({ isVisible }) =>
                <div className={isVisible ? "profile-card animate__animated animate__zoomIn" : "profile-card"}>
                  <div className="profile-orbit profile-orbit-top"></div>
                  <img src={info.img} alt={info.name} className="img-prfile"/>
                  <h2>{info.name}</h2>
                  <span className="profile-badge">Full Stack Developer</span>
                  <p>{info.description}</p>
                  <div className="profile-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="profile-orbit profile-orbit-bottom"></div>
                </div>}
            </TrackVisibilityBox>
          </Col>
          <Col xs={12} lg={7}>
            <TrackVisibilityBox>
              {({ isVisible }) =>
              <div className={isVisible ? "hero-copy animate__animated animate__fadeIn" : "hero-copy"}>
                <span className="tagline">Portafolio personal</span>
                <h1>
                  {info.title}
                  <span> {text}</span>
                </h1>
                <p>{info.description}</p>
                <div className="hero-tools">
                  {['Node.js', 'NestJS', 'Spring Boot', 'AWS', 'Kubernetes', 'Microservicios'].map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>}
            </TrackVisibilityBox>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

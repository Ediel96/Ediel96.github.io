import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GeoAlt, Github, Wifi } from "react-bootstrap-icons";
import contactImg from "../../../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

const TrackVisibilityBox = TrackVisibility.default || TrackVisibility;

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibilityBox>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibilityBox>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibilityBox>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="section-kicker">Contacto</span>
                <h2>Trabajemos juntos</h2>
                <div className="contact-info-list">
                  <span><GeoAlt /> Bogota, Colombia</span>
                  <span><Wifi /> Remoto / Hibrido</span>
                  <a href="https://github.com/Ediel96" target="_blank" rel="noreferrer"><Github /> github.com/Ediel96</a>
                </div>
                <form onSubmit={null}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Telefono" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibilityBox>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

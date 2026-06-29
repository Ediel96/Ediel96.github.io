import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  Briefcase,
  Envelope,
  Folder2Open,
  HouseDoor,
  WrenchAdjustable,
} from "react-bootstrap-icons";

export const NavBar = ( {logo , social} ) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', href: '#home', label: 'Home', icon: HouseDoor },
    { id: 'projects', href: '#projects', label: 'Proyectos', icon: Folder2Open },
    { id: 'experience', href: '#experience', label: 'Experiencia', icon: Briefcase },
    { id: 'skills', href: '#skills', label: 'Herramientas', icon: WrenchAdjustable },
    { id: 'contact', href: '#contact', label: 'Contacto', icon: Envelope },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand={true} className={scrolled ? "scrolled" : ""}>
        <Container className="nav-shell">
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="portfolio-dock mx-auto">
              {navItems.map(({ id, href, label, icon: Icon }) => (
                <Nav.Link
                  key={id}
                  href={href}
                  title={label}
                  aria-label={label}
                  className={activeLink === id ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink(id)}
                >
                  <Icon />
                  <span>{label}</span>
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <a className="nav-cta" href={social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

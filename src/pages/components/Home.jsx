import React from 'react'
import { Banner } from './layout/Banner';
import { NavBar } from './layout/NavBar';
import { Skills } from './layout/Skills';
import { Projects } from './layout/Projects';
// import { Contact } from  './layout/Contact';
import { Footer } from './layout/Footer';
import { Experience } from './layout/Experience';

import logo from '../../assets/eddi/img/logo.png';

//Info User
// import { profile } from './hook/Info';

export const Home = () => {

  const social = {
    linkedin: 'https://www.linkedin.com/in/hamilton-acevedo-5b6990141/',
    github: 'https://github.com/Ediel96',
  }

  return (
    <>
      <NavBar logo={logo} social={social}/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Experience />
      <Footer logo={logo} social={social}/>
    </>
  )
}
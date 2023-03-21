import React from 'react'
import { Banner } from './layout/Banner';
import { NavBar } from './layout/NavBar';
import { Skills } from './layout/Skills';
import { Projects } from './layout/Projects';
import { Contact } from  './layout/Contact';
import { Footer } from './layout/Footer'

export const Home = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
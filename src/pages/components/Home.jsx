import React from 'react'
import { Banner } from './layout/Banner';
import { NavBar } from './layout/NavBar';
import { Skills } from './layout/Skills';
import { Projects } from './layout/Projects';
import { Contact } from  './layout/Contact';
import { Footer } from './layout/Footer'

//Info User
import { profile } from './hook/Info'

export const Home = () => {
  return (
    <>
      {console.log(profile)}

      <NavBar/>
      <Banner info = {profile.info}/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
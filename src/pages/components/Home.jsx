import React from 'react'
import { Banner } from './layout/Banner';
import { NavBar } from './layout/NavBar';
import { Skills } from './layout/Skills';
import { Projects } from './layout/Projects';
// import { Contact } from  './layout/Contact';
import { Footer } from './layout/Footer';
import { Experience } from './layout/Experience'

//Info User
import { profile } from './hook/Info'

export const Home = () => {
  return (
    <>

      <NavBar logo={profile.logo} social={profile.social} />
      <Banner info = {profile.info}/>
      <Skills skills = {profile.skills}/>
      <Projects projects={profile.projects}/>
      {/* <Contact/> */}
      <Experience experience = {profile.experience} education={profile.education}/>
      <Footer logo={profile.logo} social={profile.social}/>
    </>
  )
}
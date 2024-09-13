import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
    <h1>salam</h1>
      
      <section id="home"></section>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience/>
      <Contact/>
      <Footer/>

      

    </>
  )
}

export default App;
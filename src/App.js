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
import GoogleMap from './components/Map/Map.jsx';


function App() {
  return (
    <>

      <section id="home"></section>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience/>
      <Contact/>
      <Footer/>
      <GoogleMap/>

      

    </>
  )
}

export default App;
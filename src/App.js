import React from 'react';
import "slick-carousel/slick/slick.css"; // Isko add karein
import "slick-carousel/slick/slick-theme.css"; // Isko bhi add karein
import './App.css';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
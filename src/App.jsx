import React from 'react';
import "slick-carousel/slick/slick.css"; // Isko add karein
import "slick-carousel/slick/slick-theme.css"; // Isko bhi add karein
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="App">
      <main>
       <Navbar/>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
         <Certificates/>
        <Contact />
        </main>
        <Footer/>
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main className="bg-sap-bg-grey min-h-screen">
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Achievements />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;

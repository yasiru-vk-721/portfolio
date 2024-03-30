import React from 'react'
import "./App.scss"
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/sidebar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';

const App = () => {
  return <div>
    
      <section>
        <Navbar />
        <Hero/>
      </section>
      <section id='education'><Parallax type="education"/></section>
      <section>Services</section>
      <section id='projects'><Parallax  type="projects"/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  
}

export default App;
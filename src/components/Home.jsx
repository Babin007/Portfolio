import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function Home(){
  return (
    <div>
      <NavBar />
      <Hero />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

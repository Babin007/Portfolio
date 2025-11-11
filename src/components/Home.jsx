import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import data from '../data'

export default function Home(){
  useEffect(() => {
    const t = data.theme || {}
    if (t.primary) document.documentElement.style.setProperty('--purple-500', t.primary)
    if (t.accent) document.documentElement.style.setProperty('--purple-400', t.accent)
    if (t.bgStart) document.documentElement.style.setProperty('--bg-start', t.bgStart)
    if (t.bgEnd) document.documentElement.style.setProperty('--bg-end', t.bgEnd)
    if (t.muted) document.documentElement.style.setProperty('--muted', t.muted)
  }, [])

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

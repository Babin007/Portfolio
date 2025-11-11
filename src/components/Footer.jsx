import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import data from '../data'

export default function Footer(){
  const section = data.footer
  if (!section || !section.isNeed) return null

  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="d-flex justify-content-between align-items-center">
          <div className="small">© {new Date().getFullYear()} Babin B J — Built with React & Bootstrap</div>
          <div className="small text-muted">{section.extra} • <a className="text-decoration-none d-inline-flex align-items-center" href="https://www.linkedin.com/in/babin-bj-1b33b8229" target="_blank" rel="noopener noreferrer"><FaLinkedin className="me-2"/>LinkedIn</a></div>
        </div>
      </div>
    </footer>
  )
}

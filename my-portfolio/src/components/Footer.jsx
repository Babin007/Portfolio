import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="d-flex justify-content-between align-items-center">
          <div className="small">© {new Date().getFullYear()} Babin B J — Built with React & Bootstrap</div>
          <div className="small text-muted">Made with ❤️ in purple • <a className="text-decoration-none d-inline-flex align-items-center" href="https://www.linkedin.com/in/babin-bj-1b33b8229" target="_blank" rel="noopener noreferrer"><FaLinkedin className="me-2"/>LinkedIn</a></div>
        </div>
      </div>
    </footer>
  )
}

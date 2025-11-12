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
          <div className="small">{section.text.replace('{year}', new Date().getFullYear())}</div>
          <div className="small text-muted">{section.extra} • <a className="text-decoration-none d-inline-flex align-items-center" href={section.link.href} target="_blank" rel="noopener noreferrer"><FaLinkedin className="me-2"/>{section.link.label}</a></div>
        </div>
      </div>
    </footer>
  )
}

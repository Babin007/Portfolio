import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import data from '../data'

export default function Hero(){
  const section = data.hero
  if (!section || !section.isNeed) return null


  return (
    <section className="hero">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-md-7 text-left">
            <h1 className="display-5 fw-bold">{section.titleIntro} <span className="brand-color">{section.name}</span></h1>
            <p className="lead">{section.headline}</p>
            <p className="small text-muted mb-2">{section.contactLine}</p>
            <p className="text-muted mb-3">{section.summary}</p>
            <p>
              <a href="#contact" className="btn btn-primary btn-lg me-2" style={{backgroundColor:'var(--purple-500)',borderColor:'var(--purple-500)'}}>{section.ctaHire}</a>
              <a href="#projects" className="btn btn-outline-light btn-lg">{section.ctaProjects}</a>
            </p>
          </div>
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <div className="card card-theme p-3">
              <img alt="profile" className="profile-pic mb-3" src={section.profilePic} />
              <h5 className="mb-0">{section.name}</h5>
              <div className="text-muted small">Project Engineer @ Wipro</div>
              <p className="mt-2 mb-0 small text-muted"><FiMail className="me-2"/> <a className="text-decoration-none text-muted" href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
              <p className="mb-0 small text-muted"><FiPhone className="me-2"/> {data.contact.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

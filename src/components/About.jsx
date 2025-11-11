import React from 'react'
import data from '../data'

export default function About(){
  const section = data.about
  if (!section || !section.isNeed) return null

  return (
    <section id="about" className="py-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-8">
            <h3 className="section-title">{section.title}</h3>
            <p className="text-muted">{section.description}</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> <a className="text-decoration-none" href={`mailto:${section.contact.email}`}>{section.contact.email}</a></li>
              <li><strong>Phone:</strong> {section.contact.phone}</li>
              <li><strong>DOB:</strong> {section.contact.dob}</li>
              <li><strong>Location:</strong> {section.contact.location}</li>
            </ul>
            <p className="mt-3"><strong>Education</strong><br/>{section.education}</p>
            <p className="mt-2"><strong>Languages</strong>: {section.languages}</p>
          </div>
          <div className="col-md-4">
            <div className="card card-theme p-3">
              <h5 className="mb-3">Current Role</h5>
              <p className="mb-1"><strong>Company:</strong> {section.currentRole.company}</p>
              <p className="mb-1"><strong>Role:</strong> {section.currentRole.role}</p>
              <p className="mb-0"><strong>Since:</strong> {section.currentRole.since}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

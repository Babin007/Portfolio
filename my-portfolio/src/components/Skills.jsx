import React from 'react'

const skills = [
  'Angular', 'React.js', '.NET Core', 'Entity Framework', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'SQL']

export default function Skills(){
  return (
    <section id="skills" className="py-5">
      <div className="container-lg">
        <h3 className="section-title">Skills</h3>
        <div className="mt-3">
          {skills.map(s => (
            <span key={s} className="skill-pill me-1">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

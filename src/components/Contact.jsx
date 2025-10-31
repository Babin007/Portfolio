import React, { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ ok: false, msg: 'EmailJS not configured. Set REACT_APP_EMAILJS_* env vars.' })
      setLoading(false)
      return
    }

    try {
      // emailjs.sendForm will include file inputs automatically
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )

      if (result.status === 200) {
        setStatus({ ok: true, msg: 'Message sent — thanks!' })
        formRef.current.reset()
      } else {
        setStatus({ ok: false, msg: 'Failed to send message' })
      }
    } catch (err) {
      console.error('EmailJS error', err)
      setStatus({ ok: false, msg: 'Send failed — try again later' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-5">
      {/* Inline styles to make placeholders more visible and improve focus state */}
      <style>{`
        /* brighter placeholder color and full opacity */
        #contact input::placeholder,
        #contact textarea::placeholder {
          color: rgba(255,255,255,0.85);
          opacity: 1;
          font-style: italic;
        }

        /* ensure actual input text is clearly visible */
        #contact input,
        #contact textarea {
          color: #ffffff;
        }

        /* subtle border highlight on focus */
        #contact input:focus,
        #contact textarea:focus {
          box-shadow: 0 0 0 0.15rem rgba(124,58,237,0.15);
          border-color: #7c3aed;
          outline: none;
        }
      `}</style>

      <div className="container-lg">
        <h3 className="section-title">Contact</h3>
        <div className="row mt-3">
          <div className="col-md-6">
            <form ref={formRef} className="card card-theme p-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="from_name" className="form-control bg-transparent text-white" placeholder="Your full name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input name="from_email" type="email" className="form-control bg-transparent text-white" placeholder="you@domain.com" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control bg-transparent text-white" rows="4" placeholder="Briefly describe your project: goals, timeline, budget..." required></textarea>
              </div>
              {/* File upload removed - form sends only text fields (from_name, from_email, message) */}
              <button className="btn btn-primary" style={{backgroundColor:'#7c3aed',borderColor:'#7c3aed'}} disabled={loading}>
                {loading ? 'Sending…' : 'Send'}
              </button>
              {status && (
                <div className={`mt-3 text-${status.ok ? 'success' : 'danger'}`}>{status.msg}</div>
              )}
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <p className="mb-2"><FiMail className="me-2"/> <strong>Email</strong>: <a className="text-decoration-none" href="mailto:babinb128@gmail.com">babinb128@gmail.com</a></p>
              <p className="mb-2"><FiPhone className="me-2"/> <strong>Phone</strong>: +91 6383576331</p>
              <p className="mb-2"><FiMapPin className="me-2"/> <strong>Location</strong>: India</p>
              <p className="mb-0"><FaLinkedin className="me-2"/> <strong>LinkedIn</strong>: <a className="text-decoration-none" href="https://www.linkedin.com/in/babin-bj-1b33b8229" target="_blank" rel="noopener noreferrer">linkedin.com/in/babin-bj-1b33b8229</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

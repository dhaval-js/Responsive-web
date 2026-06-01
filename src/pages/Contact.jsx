import { useState } from 'react'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export const Contact = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => {
      return {
        ...currentData,
        [name]: value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Contact form data:', formData)
    console.table(formData)

    setIsSubmitted(true)
  }

  return (
    <section className="page contact-page">
      <div className="page-content contact-content">
        <p className="page-subtitle">Get in touch</p>
        <h2 className="page-title">Contact Page</h2>
        <p className="page-text">
          Fill this form and submit it. Your complete form data will show in the browser console.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              className="form-input"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone</label>
            <input
              className="form-input"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input
              className="form-input"
              id="subject"
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              className="form-input form-textarea"
              id="message"
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </div>

          <button className="form-button" type="submit">
            Submit Form
          </button>
        </form>

        {isSubmitted && (
          <p className="success-note">Form submitted. Open Inspect Console to see the data.</p>
        )}
      </div>
    </section>
  )
}

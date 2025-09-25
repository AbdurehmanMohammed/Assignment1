import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
  const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', message:'' })
  const navigate = useNavigate()

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    // basic required checking
    if(!form.firstName || !form.email || !form.message){
      alert('Please fill First Name, Email and Message.')
      return
    }
    // Save to localStorage as demo backend (meets capture + redirect requirement)
    const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]')
    stored.push({ ...form, timestamp: new Date().toISOString() })
    localStorage.setItem('portfolio_messages', JSON.stringify(stored))

    // redirect to home
    navigate('/')
  }

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <div className="contact-grid">
        <div className="contact-info">
          <p><strong>Email:</strong> m.abdul2224@gmail.com</p>
          <p><strong>Phone:</strong> 647-772-7448</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange}/>
          <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange}/>
          <input name="phone" placeholder="Contact number" value={form.phone} onChange={handleChange}/>
          <input name="email" placeholder="Email address" value={form.email} onChange={handleChange}/>
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}/>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

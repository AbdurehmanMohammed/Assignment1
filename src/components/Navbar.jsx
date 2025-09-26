import React from 'react'
import { NavLink } from 'react-router-dom'

// small SVG logo + nav
function Logo(){
  return (
    <div className="logo">
      <svg width="40" height="40" viewBox="0 0 100 100" aria-hidden>
        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="#2B6CB0" />
        <text x="50" y="60" textAnchor="middle" fontSize="30" fill="white" fontWeight="700">AM</text>
      </svg>
      <span className="brand">Abdurehman</span>
    </div>
  )
}

const activeClass = ({isActive}) => isActive ? 'navlink active' : 'navlink'

export default function Navbar(){
  return (
    <header className="navbar">
      <NavLink to="/" className="logo-link"><Logo/></NavLink>
      <nav className="navlinks">
        <NavLink to="/" className={activeClass} end>Home</NavLink>
        <NavLink to="/about" className={activeClass}>About</NavLink>
        <NavLink to="/projects" className={activeClass}>Projects</NavLink>
        <NavLink to="/education" className={activeClass}>Education</NavLink>
        <NavLink to="/services" className={activeClass}>Services</NavLink>
        <NavLink to="/contact" className={activeClass}>Contact</NavLink>
      </nav>
    </header>
  )
}

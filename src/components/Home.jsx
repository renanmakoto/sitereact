import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Hi, I'm Renan Makoto</h1>
      <h2 style={subtitleStyle}>JavaScript Developer</h2>
      <p style={descriptionStyle}>
        Passionate JavaScript | Node.js developer.
      </p>
      <span
        style={buttonStyle}
        onClick={() => scrollToSection('contact')}
      >
        Contact Me <FaRegEnvelope style={iconStyle} />
      </span>
    </section>
  )
}

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8rem 1rem',
    textAlign: 'center',
    backgroundColor: '#FBFBFE'
  }

  const titleStyle = {
    fontSize: '3.0rem',
    fontWeight: 300,
    marginBottom: '1rem',
    fontFamily: '"Ubuntu", sans-serif',
    color: '#111827',
  }

  const subtitleStyle = {
    fontSize: '2.0rem', 
    fontWeight: 300,
    marginBottom: '1rem',
    fontFamily: '"Ubuntu", sans-serif',
    color: '#040404',
  }

  const descriptionStyle = {
    fontSize: '1.2rem',
    fontWeight: 300,
    marginBottom: '2.5rem',
    fontFamily: '"Ubuntu", sans-serif',
    color: '#040404',
  }

  const buttonStyle = {
    backgroundColor: '#00ADA2',
    color: '#FFFFFF',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: 500,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: '"Ubuntu", sans-serif',
    cursor: 'pointer',
  }

  const iconStyle = {
    fontSize: '1.25rem',
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

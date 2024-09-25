import React from 'react'
import { LiaFileDownloadSolid } from "react-icons/lia"

export default function About() {
  
  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>About Me</h2>
      <p style={descriptionStyle}>
        As a dedicated developer with profound expertise in JavaScript, I excel in delivering meticulously crafted solutions that merge creativity with technical precision. My approach is anchored in methodical analysis and a deep attention to detail, ensuring that every project I undertake is executed with the highest level of accuracy and effectiveness. With a robust background in Linux systems, I leverage this platform to create secure, efficient, and scalable software environments. My extensive experience spans across designing intuitive front-end interfaces, developing resilient back-end systems, and optimizing performance across the stack. I am committed to continuous learning, constantly evolving my skill set to stay at the forefront of technology. I thrive in dynamic environments where I can apply my expertise to innovative projects, consistently pushing the boundaries of what's possible through the power of JavaScript and open-source tools.
      </p>
      <a href="/assets/renanmakotoresume.pdf" download="renanmakotoresume.pdf" style={buttonStyle}>
        Download Resume <LiaFileDownloadSolid style={iconStyle} />
      </a>
    </section>
  )
}

const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 1rem',
    textAlign: 'center',
    backgroundColor: '#FBFBFE',
  }

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: 400,
    marginBottom: '1rem',
    fontFamily: '"Ubuntu", sans-serif',
    color: '#111827',
  }

  const descriptionStyle = {
    fontSize: '1.1rem',
    fontWeight: 300,
    marginBottom: '2.5rem',
    maxWidth: '700px',
    fontFamily: '"Ubuntu", sans-serif',
    color: '#6B7280',
    lineHeight: '1.6',
  }

  const buttonStyle = {
    backgroundColor: '#00ADA2',
    color: '#FFFFFF',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const iconStyle = {
    fontSize: '2.25rem',
  }

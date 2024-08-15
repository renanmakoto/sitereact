import React from 'react'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {

  const footerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    backgroundColor: '#00ADA2',
    textAlign: 'center',
    color: '#FFFFFF',
    boxSizing: 'border-box',
  }

  const footerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1200px',
    marginBottom: '2rem',
    width: '100%',
  }

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const subtitleStyle = {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
  }

  const footerTitleStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center',
  }

  const socialContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '1.5rem',
  }

  const socialLinkStyle = {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    textDecoration: 'none',
  }

  const footerCopyStyle = {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#FFFFFF',
    fontFamily: '"Ubuntu", sans-serif',
    textAlign: 'center',
  }

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={footerTitleStyle}>
          <h1 style={titleStyle}>Renan Makoto</h1>
          <span style={subtitleStyle}>Software Developer</span>
        </div>
        <div style={socialContainerStyle}>
          <a
            href="https://www.linkedin.com/in/renanmakoto/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/renanmakoto"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <p style={footerCopyStyle}>
        By Renan Makoto - dotExtension
      </p>
      <p style={footerCopyStyle}>
        Extending to every file type.
      </p>
    </footer>
  )
}

export default Footer

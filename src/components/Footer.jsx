import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    backgroundColor: '#00ADA2',
    textAlign: 'center',
    color: '#FFFFFF',
  }

  const footerContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '3.5rem',
  }

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    fontFamily: '"Ubuntu", sans-serif',
    textAlign: 'left',  // Align text to the left for desktop
  }

  const subtitleStyle = {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
    textAlign: 'left',  // Align text to the left for desktop
  }

  const footerTitleStyle = {
    marginLeft: window.innerWidth > 768 ? 0 : 200, // Move to the left for desktop
  }

  const socialContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginRight: window.innerWidth > 768 ? 0 : 620, // Move to the right for desktop
  }

  const socialLinkStyle = {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  }

  const socialLinkHoverStyle = {
    color: '#005954',
  }

  const footerCopyStyle = {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#FFFFFF',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const mobileContainerStyle = {
    flexDirection: 'column',
    marginLeft: 0,
    marginRight: 0,
  }

  const mobileTitleStyle = {
    marginLeft: 0,
    marginBottom: '1rem',
    textAlign: 'center',
  }

  const mobileSocialContainerStyle = {
    marginRight: 0,
    justifyContent: 'center',
    marginBottom: '1.5rem',
  }

  return (
    <footer style={footerStyle}>
      <div style={{ ...footerContainerStyle, ...(window.innerWidth <= 768 ? mobileContainerStyle : {}) }}>
        <div style={{ ...footerTitleStyle, ...(window.innerWidth <= 768 ? mobileTitleStyle : {}) }}>
          <h1 style={titleStyle}>Renan Makoto</h1>
          <span style={subtitleStyle}>Software Developer</span>
        </div>
        <div style={{ ...socialContainerStyle, ...(window.innerWidth <= 768 ? mobileSocialContainerStyle : {}) }}>
          <a
            href="https://www.linkedin.com/in/renanmakoto/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = socialLinkHoverStyle.color}
            onMouseLeave={(e) => e.currentTarget.style.color = socialLinkStyle.color}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/renanmakoto"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = socialLinkHoverStyle.color}
            onMouseLeave={(e) => e.currentTarget.style.color = socialLinkStyle.color}
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

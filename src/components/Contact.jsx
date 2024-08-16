import React from 'react'

import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa"

const Contact = () => {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 1rem',
    backgroundColor: '#FBFBFE',
    textAlign: 'center',
  }

  const titleStyle = {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#111827',
    marginBottom: '0.5rem',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const contactContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
  }

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  }

  const iconStyle = {
    fontSize: '2rem',
    color: '#00ADA2',
    marginTop: 20
  }

  const contactTextContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const contactTitleStyle = {
    fontSize: '1.35rem',
    fontWeight: 400,
    color: '#111827',
    fontFamily: '"Ubuntu", sans-serif',
    marginBottom: 0,
  }

  const contactSubtitleStyle = {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#6B7280',
    fontFamily: '"Ubuntu", sans-serif',
    textDecoration: 'none'
  }

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Contact me</h2>
      <div style={contactContainerStyle}>
        <div style={contactInfoStyle}>
          <MdOutlineEmail style={iconStyle} />
          <div style={contactTextContainerStyle}>
            <h3 style={contactTitleStyle}>Email</h3>
            <a
              href="mailto:contactrenanmakoto@gmail.com"
              style={contactSubtitleStyle}
            >
              contactrenanmakoto@gmail.com
            </a>
          </div>
        </div>
        <div style={contactInfoStyle}>
          <FaLinkedinIn style={iconStyle} />
          <div style={contactTextContainerStyle}>
            <h3 style={contactTitleStyle}>Linkedin</h3>
            <a
              href="https://www.linkedin.com/in/renanmakoto/"
              target="_blank"
              rel="noopener noreferrer"
              style={contactSubtitleStyle}
            >
              @renanmakoto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

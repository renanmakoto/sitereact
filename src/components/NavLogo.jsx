import React from 'react'

const NavLogo = () => {
  const navLogoStyle = {
    fontSize: '1.1rem',
    color: '#111827',
    fontWeight: 450,
    fontFamily: '"Ubuntu", sans-serif',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    marginLeft: 20,
    marginRight: 30,
    cursor: 'pointer',
    position: 'fixed',
    top: 0,
    left: '7.9rem',
    padding: '1rem',
    zIndex: 1001,
    backgroundColor: '#FBFBFE',
  }

  const navLinkHoverStyle = {
    color: '#00ADA2',
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <span
        style={navLogoStyle}
        onClick={() => scrollToSection('home')}
        onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
        onMouseLeave={(e) => e.target.style.color = '#111827'}
      >
        dotExtension
      </span>
    </div>
  )
}

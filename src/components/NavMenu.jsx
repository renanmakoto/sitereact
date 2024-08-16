import React, { useState, useEffect } from 'react'

const NavMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    setIsScrolled(currentScrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navMenuStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    width: '100%',
    height: '10.5rem',
    top: '0rem',
    backgroundColor: '#FBFBFE',
    zIndex: 1000,
    boxShadow: isScrolled ? '0 1px 4px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'box-shadow 0.3s ease-in-out',
  }

  const navLinkStyle = {
    fontSize: '0.9rem',
    color: '#111827',
    fontWeight: 450,
    fontFamily: '"Ubuntu", sans-serif',
    margin: '0rem 1rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    marginBottom: '-2rem',
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
    <div style={navMenuStyle}>
      <span
        style={navLinkStyle}
        onClick={() => scrollToSection('home')}
        onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
        onMouseLeave={(e) => e.target.style.color = '#111827'}
      >
        Home
      </span>
      <span
        style={navLinkStyle}
        onClick={() => scrollToSection('about')}
        onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
        onMouseLeave={(e) => e.target.style.color = '#111827'}
      >
        About
      </span>
      <span
        style={navLinkStyle}
        onClick={() => scrollToSection('skills')}
        onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
        onMouseLeave={(e) => e.target.style.color = '#111827'}
      >
        Skills
      </span>
      <span
        style={navLinkStyle}
        onClick={() => scrollToSection('services')}
        onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
        onMouseLeave={(e) => e.target.style.color = '#111827'}
      >
        Services
      </span>
      <span
        style={navLinkStyle}
        onClick={() => scrollToSection('contact')}
        onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
        onMouseLeave={(e) => e.target.style.color = '#111827'}
      >
        Contact
      </span>
    </div>
  )
}

export default NavMenu

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    setIsScrolled(currentScrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const headerStyle = {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#FBFBFE',
    boxShadow: isScrolled ? '0 1px 4px rgba(0, 0, 0, 0.1)' : 'none',
    transition: '0.3s ease-in-out',
  }

  const navStyle = {
    maxWidth: '1200px',
    height: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    padding: '0 1.5rem',
    zIndex: 1001,
  }

  const navLogoStyle = {
    fontSize: '1.1rem',
    color: hoveredLink === 'home' ? '#00ADA2' : '#111827',
    fontWeight: 450,
    fontFamily: '"Ubuntu", sans-serif',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    marginLeft: 20,
    marginRight: 30,
  }

  const navMenuStyle = {
    display: isMobileMenuOpen ? 'block' : 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 100,
    position: isMobileMenuOpen ? 'absolute' : 'initial',
    top: isMobileMenuOpen ? '4rem' : 'initial',
    left: 0,
    right: 0,
    backgroundColor: isMobileMenuOpen ? '#FBFBFE' : 'transparent',
    padding: isMobileMenuOpen ? '1rem 2rem' : '0',
    textAlign: 'center',
    zIndex: 1000,
  }

  const navLinkBaseStyle = {
    fontSize: '0.9rem',
    color: '#111827',
    fontWeight: 450,
    fontFamily: '"Ubuntu", sans-serif',
    margin: '0 1rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  }

  const navLinkStyle = (linkName) => ({
    ...navLinkBaseStyle,
    color: hoveredLink === linkName ? '#00ADA2' : '#111827',
  })

  return (
    <header style={headerStyle} id="header">
      <nav style={navStyle}>
        <a
          href='#home'
          style={navLogoStyle}
          onMouseEnter={() => setHoveredLink('home')}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => scrollToSection('home')}
        >
          dotExtension
        </a>
        <div style={navMenuStyle} id="nav-menu" className="nav-menu">
          <span
            style={navLinkStyle('home2')}
            onMouseEnter={() => setHoveredLink('home2')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollToSection('home')}
            className="nav-link"
          >
            Home
          </span>
          <span
            style={navLinkStyle('about')}
            onMouseEnter={() => setHoveredLink('about')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            About
          </span>
          <span
            style={navLinkStyle('skills')}
            onMouseEnter={() => setHoveredLink('skills')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollToSection('skills')}
            className="nav-link"
          >
            Skills
          </span>
          <span
            style={navLinkStyle('services')}
            onMouseEnter={() => setHoveredLink('services')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollToSection('services')}
            className="nav-link"
          >
            Services
          </span>
          <span
            style={navLinkStyle('contact')}
            onMouseEnter={() => setHoveredLink('contact')}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contact
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#111827',
            marginLeft: 'auto',
          }}
          className="mobile-menu-button"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap');

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          ${navMenuStyle} {
            display: block;
            padding: 1rem 0;
          }

          ${navLinkBaseStyle} {
            display: block;
            margin: 0.5rem 0;
          }

          ${navLinkStyle} {
            color: #111827;
          }
        }
      `}</style>
    </header>
  )
}

export default Header

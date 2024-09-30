import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollUpStyle = {
    position: 'fixed',
    right: '1rem',
    bottom: '1rem',
    backgroundColor: '#00ADA2',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    zIndex: 1000,
    cursor: 'pointer',
    transition: 'opacity 0.3s ease-in-out',
    opacity: showScroll ? '1' : '0',
    pointerEvents: showScroll ? 'auto' : 'none'
  }

  const iconStyle = {
    color: '#fff',
    fontSize: '1rem'
  }

  return (
    <div style={scrollUpStyle} onClick={scrollTop}>
      <FaArrowUp style={iconStyle} />
    </div>
  )
}

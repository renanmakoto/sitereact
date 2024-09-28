import React from 'react'

export default function Skill() {
  
  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Skills</h2>
      <div style={skillsContainerStyle}>
        <div style={skillItemStyle}>JavaScript</div>
        <div style={skillItemStyle}>TypeScript</div>
        <div style={skillItemStyle}>Node JS</div>
        <div style={skillItemStyle}>React</div>
        <div style={skillItemStyle}>React Native</div>
        <div style={skillItemStyle}>Express JS</div>
        <div style={skillItemStyle}>MongoDB</div>
        <div style={skillItemStyle}>CSS</div>
        <div style={skillItemStyle}>HTML</div>
      </div>
    </section>

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
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '#111827',
    marginBottom: '3.5rem',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const skillsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    maxWidth: '800px',
  }

  const skillItemStyle = {
    backgroundColor: '#00ADA2',
    color: '#FFFFFF',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: 600,
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '1rem',
    textAlign: 'center',
    cursor: 'default',
  }
  )
}

import React, { useState } from 'react'

import { FaCheckCircle } from 'react-icons/fa'


const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6rem 1rem',
    backgroundColor: '#FBFBFE',
    textAlign: 'center',
  }

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: 400,
    color: '#111827',
    marginBottom: '0.5rem',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const subtitleStyle = {
    fontSize: '1.35rem',
    fontWeight: 400,
    color: '#6B7280',
    marginBottom: '2rem',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const servicesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  }

  const serviceCardStyle = {
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '250px',
    transition: 'transform 0.3s ease',
  }

  const serviceTitleStyle = {
    fontSize: '1.35rem',
    fontWeight: 400,
    color: '#111827',
    marginBottom: '1.1rem',
    fontFamily: '"Ubuntu", sans-serif',
  }

  const serviceLinkStyle = {
    fontSize: '1.2rem',
    fontWeight: 400,
    color: '#00ADA2',
    textDecoration: 'none',
    fontFamily: '"Ubuntu", sans-serif',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  }

  const arrowStyle = {
    marginLeft: '0.5rem',
    transition: 'transform 0.3s ease',
  }

  const modalStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFFF',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 2000, 
    animation: isModalOpen ? 'fadeIn 0.3s ease' : 'fadeOut 0.3s ease',
    width: '300px',
    height: '280px',
  }

  const overlayStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1999,
  }


  const skillName = {
    fontFamily: '"Ubuntu", sans-serif',
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedService('')
  }

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Services</h2>
      <span style={subtitleStyle}>What I offer</span>
      <div style={servicesContainerStyle}>
        <div
          style={serviceCardStyle}
          onClick={() => handleServiceClick('Software Development')}
        >
          <h3 style={serviceTitleStyle}>Software Development</h3>
          <span style={serviceLinkStyle}>
            View more <span style={arrowStyle}>➜</span>
          </span>
        </div>
        <div
          style={serviceCardStyle}
          onClick={() => handleServiceClick('Mobile Interfaces')}
        >
          <h3 style={serviceTitleStyle}>Mobile Interfaces</h3>
          <span style={serviceLinkStyle}>
            View more <span style={arrowStyle}>➜</span>
          </span>
        </div>
        <div
          style={serviceCardStyle}
          onClick={() => handleServiceClick('Database')}
        >
          <h3 style={serviceTitleStyle}>Database</h3>
          <span style={serviceLinkStyle}>
            View more <span style={arrowStyle}>➜</span>
          </span>
        </div>
      </div>

      <div style={overlayStyle} onClick={closeModal}></div>

      <div style={modalStyle}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <h3 style={{ fontSize: '1.35rem', color: '#111827', fontFamily: '"Poppins", sans-serif' }}>
            {selectedService === 'Software Development'
              ? 'Programming Technologies'
              : selectedService === 'Mobile Interfaces'
              ? 'Mobile Technologies'
              : 'Database Management'}
          </h3>
          <span
            style={{
              fontSize: '1.5rem',
              color: '#00ADA2',
              cursor: 'pointer',
            }}
            onClick={closeModal}
          >
            ✕
          </span>
        </div>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {selectedService === 'Software Development' && (
            <>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                <FaCheckCircle />
                </span>
                <p style={skillName}>EcmaScript 6</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                <FaCheckCircle />
                </span> 
                <p style={skillName}>TypeScript</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                <FaCheckCircle />
                </span>
                <p style={skillName}>Node.js</p> 
              </li>
            </>
          )}
          {selectedService === 'Mobile Interfaces' && (
            <>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                  <FaCheckCircle />  
                </span> 
                <p style={skillName}>React Native</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                <FaCheckCircle />
                </span>
                <p style={skillName}>Expo</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                <FaCheckCircle />
                </span>
                <p style={skillName}>TypeScript</p>
              </li>
            </>
          )}
          {selectedService === 'Database' && (
            <>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                  <FaCheckCircle />  
                </span> 
                <p style={skillName}>MongoDB</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                  <FaCheckCircle />
                </span> 
                <p style={skillName}>Firebase</p>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#00ADA2', marginRight: '0.5rem' }}>
                  <FaCheckCircle />
                </span> 
                <p style={skillName}>MySQL</p>
              </li>
            </>
          )}
        </ul>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
        }
      `}</style>
    </section>
  )
}

export default Services

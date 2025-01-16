import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

const ContactInfo = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          eventKey="0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span style={{ marginLeft: '10px' }}>Contact Information</span>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
          <p>{program.MainContact}</p>
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default ContactInfo

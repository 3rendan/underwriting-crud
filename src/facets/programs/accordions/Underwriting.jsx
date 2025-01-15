import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Underwriting = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          eventKey="0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span style={{ marginLeft: '10px' }}>Underwriting</span>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
          <p>
            <strong>Underwriters:</strong> {program.NationalUnderwriter}
          </p>
          <p>
            <strong>Local Underwriting:</strong> {program.ProgramStatus}
          </p>
          <p>
            <strong>Restrictions:</strong> {program.LocalUnderwritingRestrictions}
          </p>
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default Underwriting

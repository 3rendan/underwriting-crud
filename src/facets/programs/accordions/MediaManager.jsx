import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

const MediaManager
 = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          eventKey="0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span style={{ marginLeft: '10px' }}>Media Manager</span>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
        <strong>Availability</strong>
          <p>
             {program.MMGeneralStreamingGeo}
          </p>
          <strong>Short Description</strong>
          <p>
             {program.MMShortDesc}
          </p>
          <strong>Long Description</strong>
          <p>
            {program.MMLongDesc}
          </p>
          <p>
            <strong>Passport availability:</strong> {program.MMPassportStreamingGeo}
          </p>
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default MediaManager


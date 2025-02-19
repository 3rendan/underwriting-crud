import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import BooleanInput from '../../../forms/inputs/BooleanInput'

const Voting = ({ formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false)


  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          eventKey="0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h5 style={{ marginLeft: '10px' }}>Voting</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
          <h4 className='huh'>where does the table come from?</h4>
          <BooleanInput
            label='Border Stations Included'
            id='borderStationsIncluded'
            value={formData.borderStationsIncluded}
            onChange={handleChange}
          />      
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default Voting


import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TextInput from '../../../forms/inputs/TextInput'
import CheckboxInput from '../../../forms/inputs/CheckboxInput'

const Accounting = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ formData, setFormData ] = useState({})

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          eventKey="0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h5 style={{ marginLeft: '10px' }}>Accounting</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
        {/* <CheckboxInput
            label='Format'
            id='format'
            value={formData.format}
            onChange={handleChange}
            options={formatOptions} */}
          {/* /> */}
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default Accounting


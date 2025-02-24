import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TextInput from '../../../../../forms/inputs/TextInput'
import CheckboxInput from '../../../../../forms/inputs/CheckboxInput'
import SelectInput from '../../../../../forms/inputs/SelectInput'
import { options } from '../../../../../forms/formData/formOptions'

const DistributionServices = ({ formData, setFormData }) => {
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
          <h5 style={{ marginLeft: '10px' }}>DistributionServices</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
          <h6 className='huh'>What is the Notes table? Where is it sourced from?</h6>
          <CheckboxInput
            label='Format'
            id='format'
            value={formData.format}
            onChange={handleChange}
            options={options.formatOptions}
          />
          <TextInput
            label='Ratio'
            id='ratio'
            value={formData.ratio}
            onChange={handleChange}
          />
          <SelectInput
            label='sIX Availability'
            id='sIXAvailability'
            value={formData.sIXAvailability}
            onChange={handleChange}
            options={options.sIXAvailabilityOptions}
          />
          <TextInput
            label='Episode Number'
            id='episodeNum'
            value={formData.episodeNum}
            onChange={handleChange}
          />
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default DistributionServices


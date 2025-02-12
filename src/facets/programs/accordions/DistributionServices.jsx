import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TextInput from '../../../forms/inputs/TextInput'
import CheckboxInput from '../../../forms/inputs/CheckboxInput'
import SelectInput from '../../../forms/inputs/SelectInput'

const DistributionServices = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ formData, setFormData ] = useState({
    format: '',
    ratio: '',
    nola: '',
    sIXAvailability: '',
    episodeNum: ''
  })

  const formatOptions = [
    { value: 'Live', label: 'Live'},
    { value: 'Letterbox', label: 'Letterbox'},
    { value: 'DVI', label: 'DVI'},
    { value: 'SAP', label: 'SAP'},
    { value: 'Closed Captioned', label: 'Closed Captioned'},
    { value: 'Not Close Captioned', label: 'Not Close Captioned'},
    { value: 'Subtitled', label: 'Subtitled'},
    { value: 'Ration', label: 'Ration'},
    { value: '4:3 center safe', label: '4:3 center safe'}
  ]

  const sIXAvailabilityOptions = [
    { value: 'Yes', label: 'Yes'},
    { value: 'No', label: 'No'},
    { value: 'Future', label: 'Future'},
  ]

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
          <h6 class='huh'>What is the Notes table? Where is it sourced from?</h6>
          <CheckboxInput
            label='Format'
            id='format'
            value={formData.format}
            onChange={handleChange}
            options={formatOptions}
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
            options={sIXAvailabilityOptions}
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


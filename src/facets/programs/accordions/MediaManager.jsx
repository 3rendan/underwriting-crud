import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import InfoAccordion from '../../../forms/inputs/InfoAccordion'
import TextInput from '../../../forms/inputs/TextInput'
import TextAreaInput from '../../../forms/inputs/TextAreaInput'
import BooleanInput from '../../../forms/inputs/BooleanInput'
import SelectInput from '../../../forms/inputs/SelectInput'
import DateInput from '../../../forms/inputs/DateInput'

const MediaManager = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ formData, setFormData ] = useState({
    mmPotential: '',
    shortDescription: '',
    longDescription: '',
    descriptionsReviewed: false,
    mmGenre: '',


  })
  const mmPotenialOptions = [
    { value: 'Yes', label: 'Yes'},
    { value: 'No', label: 'No'},
    { value: 'Not determined', label: 'Not determined'}
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
      <Accordion.Item eventKey='0'>
        <Accordion.Header
          eventKey='0'
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h5 style={{ marginLeft: '10px' }}>Media Manager</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey='0'>
        <Accordion.Body>
          <div className='mm-programming-contracts'>
            <h6>For Programming/ Contracts</h6>
            {/* <InfoAccordion
              label='Help'
              message='where does this info come from?'
            /> */}
            <h4 className='huh'>what is contact/release period?</h4>
            <SelectInput
              label='MM potential, through presenting stations or APT?'
              id='mmPotential'
              value={formData.mmPotential}
              onChange={handleChange}
              options={mmPotenialOptions}
            />
            <h4 className='huh'>what is copy MM fields to episodes button?</h4>
          </div>
          <div className='mm-publishing-communications'>
            <h6>For Publishing/ Communications</h6>
            <TextAreaInput
              label='Short Description'
              name='shortDescription'
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder='Enter a concise description'
              isRequired='false'
            />
            <TextAreaInput
              label='Long Description'
              name='longDescription'
              value={formData.longDescription}
              onChange={handleChange}
              placeholder='Enter a detailed description'
              isRequired
            />
            <BooleanInput
              label='Descriptions reviewed?'
              id='descriptionsReviewed'
              value={formData.descriptionsReviewed}
              onChange={handleChange}
            />
            <TextInput
              label='MM Genre:'
              id='mmGenre'
              value={formData.mmGenre}
              onChange={handleChange}
            />
            <small><i>Media Manager Genre is different from APT's and the PTV genre used in sIX and BroadView</i></small>
            <h4 className='huh'>what is the MM Asset Status copy button?</h4>
          </div>
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default MediaManager


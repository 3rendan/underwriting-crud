import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import SimpleContactFormInput from '../../../../../forms/inputs/SimpleContactFormInput'
import SocialContactFormInput from '../../../../../forms/inputs/SocialContactFormInput'
import TextAreaInput from '../../../../../forms/inputs/TextAreaInput'
import TextInput from '../../../../../forms/inputs/TextInput'

const Communications = ({ formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false)


  const handleContactChange = (id, updatedContact) => {
    setFormData({
      ...formData,
      [id]: updatedContact, // Dynamically update the contact object based on the id
    })
  }

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
          <h5 style={{ marginLeft: '10px' }}>Communications</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body className='pc-body'>
          <TextAreaInput
            label='Promotional materials'
            name='promoMaterials'
            value={formData.promoMaterials}
            onChange={handleChange}
            placeholder='Available promotional materials'
          />
          <TextInput
            label='Doclink to merchandise information'
            id='merchandiseInfoLink'
            value={formData.merchandiseInfoLink}
            onChange={handleChange}
          />
          <br/>
          <SimpleContactFormInput
            label='Viewer inquiries'
            id='viewerInquiries'
            value={formData.viewerInquiries}
            onChange={(updatedContact) => handleContactChange('viewerInquiries', updatedContact)}
          />
          <SocialContactFormInput
            label='Social media contact information'
            id='viewerInquiries'
            value={formData.viewerInquiries}
            onChange={(updatedContact) => handleContactChange('viewerInquiries', updatedContact)}
          />
          <TextAreaInput
            label='Contract confirmation description'
            name='contractConfirmationDescription'
            value={formData.contractConfirmationDescription}
            onChange={handleChange}
            placeholder='Describe the contract confirmation'
          />
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default Communications


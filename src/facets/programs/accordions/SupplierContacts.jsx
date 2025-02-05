import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import ContactFormInput from '../../../forms/inputs/ContactFormInput'

const SupplierContacts = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    mainContact: {
      company: '',
      streetAddress: '',
      city: '',
      country: '',
      zipCode: '',
      email: '',
      phoneNumber: '',
    },
    supplierContact: {
      company: '',
      streetAddress: '',
      city: '',
      country: '',
      zipCode: '',
      email: '',
      phoneNumber: '',
    },
    communicationsContact: {
      company: '',
      streetAddress: '',
      city: '',
      country: '',
      zipCode: '',
      email: '',
      phoneNumber: '',
    },
    operationsContact: {
      company: '',
      streetAddress: '',
      city: '',
      country: '',
      zipCode: '',
      email: '',
      phoneNumber: '',
    },
    producedPresentedBy: '',
    stationRelationsContact: {
      company: '',
      streetAddress: '',
      city: '',
      country: '',
      zipCode: '',
      email: '',
      phoneNumber: '',
    },
    mediaContact: {
      company: '',
      streetAddress: '',
      city: '',
      country: '',
      zipCode: '',
      email: '',
      phoneNumber: '',
    },
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header
          eventKey='0'
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h4 style={{ marginLeft: '10px' }}>Contacts</h4>
        </Accordion.Header>
        <Accordion.Collapse eventKey='0'>
          <Accordion.Body>
          <Form.Group className='mb-2' controlId='producedPresentedBy'>
              <Form.Label>Produced/Presented By</Form.Label>
              <Form.Control
                type='text'
                value={formData.producedPresentedBy}
                onChange={handleChange}
              />
            </Form.Group>
            <ContactFormInput
              label='Supplier Contact'
              id='supplierContact'
              value={formData.supplierContact}
              onChange={(updatedContact) => handleContactChange('supplierContact', updatedContact)}
            />
            <ContactFormInput
              label='Main Contact'
              id='mainContact'
              value={formData.mainContact}
              onChange={(updatedContact) => handleContactChange('mainContact', updatedContact)}
            />
            <ContactFormInput
              label='Communications Contact'
              id='communicationsContact'
              value={formData.communicationsContact}
              onChange={(updatedContact) => handleContactChange('communicationsContact', updatedContact)}
            />
            <ContactFormInput
              label='Operations Address'
              id='operationsContact'
              value={formData.operationsContact}
              onChange={(updatedContact) => handleContactChange('operationsContact', updatedContact)}
            />
            <ContactFormInput
              label='Station Relations Contact'
              id='stationRelationsContact'
              value={formData.stationRelationsContact}
              onChange={(updatedContact) => handleContactChange('stationRelationsContact', updatedContact)}
            />
            <ContactFormInput
              label='Media Contact'
              id='mediaContact'
              value={formData.mediaContact}
              onChange={(updatedContact) => handleContactChange('mediaContact', updatedContact)}
            />
          </Accordion.Body>
        </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default SupplierContacts
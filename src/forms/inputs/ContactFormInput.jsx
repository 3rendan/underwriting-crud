import React, { useState } from 'react'
import { Form, Card, Button, Accordion } from 'react-bootstrap'
import { Plus, Dash } from 'react-bootstrap-icons' // Icons for expand/collapse
import TextInput from './TextInput' // Import the TextInput component

const ContactFormInput = ({ label, id, value, onChange }) => {
  const [expanded, setExpanded] = useState(false) // State to manage accordion visibility

  // Destructure the nested fields from the value object
  const { company, streetAddress, city, country, zipCode, email, phoneNumber } = value

  // Handle changes for nested fields
  const handleNestedChange = (fieldName, fieldValue) => {
    onChange({
      ...value, // Spread the existing nested object
      [fieldName]: fieldValue, // Update the specific field
    })
  }

  return (
    <Accordion className='mb-2' activeKey={expanded ? '0' : null}>
      <Card>
        <Card.Header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setExpanded(!expanded)} // Toggle accordion visibility
          >
            <span>{label}</span>
            <Button
              variant='link'
              onClick={(e) => {
                e.stopPropagation() // Prevent accordion toggle when clicking the button
                setExpanded(!expanded)
              }}
            >
              {expanded ? <Dash size={20} /> : <Plus size={20} />} {/* Toggle between plus and minus icons */}
            </Button>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <TextInput
              label='Company'
              id={`${id}-company`}
              value={company || ''}
              onChange={(e) => handleNestedChange('company', e.target.value)}
            />
            <TextInput
              label='Street Address'
              id={`${id}-streetAddress`}
              value={streetAddress || ''}
              onChange={(e) => handleNestedChange('streetAddress', e.target.value)}
            />
            <TextInput
              label='City'
              id={`${id}-city`}
              value={city || ''}
              onChange={(e) => handleNestedChange('city', e.target.value)}
            />
            <TextInput
              label='Country'
              id={`${id}-country`}
              value={country || ''}
              onChange={(e) => handleNestedChange('country', e.target.value)}
            />
            <TextInput
              label='Zip/Postal Code'
              id={`${id}-zipCode`}
              value={zipCode || ''}
              onChange={(e) => handleNestedChange('zipCode', e.target.value)}
            />
            <TextInput
              label='Email'
              id={`${id}-email`}
              value={email || ''}
              onChange={(e) => handleNestedChange('email', e.target.value)}
            />
            <TextInput
              label='Phone Number'
              id={`${id}-phoneNumber`}
              value={phoneNumber || ''}
              onChange={(e) => handleNestedChange('phoneNumber', e.target.value)}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default ContactFormInput
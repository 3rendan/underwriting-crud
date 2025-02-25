import React from 'react'
import Form from 'react-bootstrap/Form'

const CurrencyInput = ({ label, name, value, onChange, placeholder, error, isRequired, id }) => {
  const handleChange = (e) => {
    const { value } = e.target

    // Remove all non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '')

    // Ensure the value is a whole number (no decimal places)
    const wholeNumberValue = numericValue === '' ? '' : parseInt(numericValue, 10)

    // Pass the validated value to the parent component
    onChange({ target: { name, value: wholeNumberValue } })
  }

  // Format the value as a whole number US dollar value
  const formattedValue = value ? `$${parseInt(value, 10).toLocaleString('en-US')}` : ''

  return (
    <Form.Group controlId={name} style={{ display: 'flex', alignItems: 'center', width: '100%' }} id={id}>
      {label && (
        <Form.Label style={{ flex: '0 0 3rem', marginRight: '10px' }}>
          {label}
          {isRequired && <span className='required'> *</span>}
        </Form.Label>
      )}
      <Form.Control
        type='text' // Use 'text' to allow formatting
        name={name}
        value={formattedValue}
        onChange={handleChange}
        placeholder={placeholder}
        isInvalid={!!error}
        style={{ flex: '1', margin: '0 auto', textAlign: 'right' }} // Align text to the right
      />
      {error && <Form.Control.Feedback className='validation-error' type='invalid'>{error}</Form.Control.Feedback>}
    </Form.Group>
  )
}

export default CurrencyInput
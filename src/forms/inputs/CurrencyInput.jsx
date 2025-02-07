import React from 'react'
import Form from 'react-bootstrap/Form'

const NumberInput = ({ label, name, value, onChange, placeholder, error, isRequired }) => {
  const handleChange = (e) => {
    const { value } = e.target
    // Remove non-numeric characters (except decimal point)
    const numericValue = value.replace(/[^0-9.]/g, '')
    // Pass the numeric value to the parent component
    onChange({ target: { name, value: numericValue } })
  }

  // Format the value as currency
  const formattedValue = value ? `$${parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2 })}` : ''

  return (
    <Form.Group controlId={name} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {label && (
        <Form.Label style={{ flex: '0 0 3rem', marginRight: '10px' }}>
          {label}
          {isRequired && <span className='text-danger'> *</span>}
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
      {error && <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>}
    </Form.Group>
  )
}

export default NumberInput
import React from 'react'
import Form from 'react-bootstrap/Form'

const NumberInput = ({ label, name, value, onChange, placeholder, error, isRequired }) => {
  const handleChange = (e) => {
    const { value } = e.target
    // Ensure only numeric values are allowed
    if (/^\d*\.?\d*$/.test(value)) {
      onChange(e)
    }
  }

  return (
    <Form.Group controlId={name} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {label && (
        <Form.Label style={{ flex: '0 0 3rem', marginRight: '10px' }}>
          {label}
          {isRequired && <span className="text-danger"> *</span>}
        </Form.Label>
      )}
      <Form.Control
        type="text" // Use "text" to allow decimal points
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        isInvalid={!!error}
        style={{ flex: '1', margin: '0 auto' }}
      />
      {/* {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>} */}
    </Form.Group>
  )
}

export default NumberInput
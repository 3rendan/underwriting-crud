import React from 'react'
import Form from 'react-bootstrap/Form'

const SelectInput = ({ label, id, value, onChange, options }) => {
  return (
    <Form.Group className='mb-2' controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as='select' value={value} onChange={onChange}>
        <option value=''>Select an option</option> {/* Optional default option */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  )
}

export default SelectInput
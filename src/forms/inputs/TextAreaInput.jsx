import React from 'react'
import Form from 'react-bootstrap/Form'

const TextArea = ({ label, name, value, onChange, placeholder }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as='textarea'
        rows={3} // Set the number of rows to 3
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  )
}

export default TextArea
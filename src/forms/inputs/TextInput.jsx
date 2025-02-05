import React from 'react'
import Form from 'react-bootstrap/Form'

const TextInput = ({ label, id, value, onChange }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type='text'
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  )
}

export default TextInput
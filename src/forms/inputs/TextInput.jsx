import React from 'react'
import Form from 'react-bootstrap/Form'

const TextInput = ({ label, id, value, name, onChange }) => {
  return (
    <Form.Group className='mb-2' controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type='text'
        name={name}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  )
}

export default TextInput
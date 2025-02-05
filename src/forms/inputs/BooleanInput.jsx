import React from 'react'
import Form from 'react-bootstrap/Form'

const BooleanInput = ({ label, id, checked, onChange }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Check
        type='checkbox'
        label={label}
        checked={checked}
        onChange={onChange}
      />
    </Form.Group>
  )
}

export default BooleanInput
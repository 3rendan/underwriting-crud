import React from 'react'
import Form from 'react-bootstrap/Form'

const BooleanInput = ({ label, id, checked, onChange }) => {
  return (
    <Form.Group className='mb-2' controlId={id}>
      <Form.Check
        type='checkbox'
        label={label}
        checked={checked}
        onChange={onChange}
        className='text-nowrap'
      />
    </Form.Group>
  )
}

export default BooleanInput
import React from 'react'
import Form from 'react-bootstrap/Form'

const CheckboxInput = ({ label, id, value, onChange, options }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value
    const isChecked = e.target.checked

    let updatedValues
    if (isChecked) {
      updatedValues = [...value, selectedValue]
    } else {
      updatedValues = value.filter((item) => item !== selectedValue)
    }

    onChange(updatedValues)
  }

  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      {options.map((option, index) => (
        <Form.Check
          key={index} // Use index as the key
          type='checkbox'
          id={`${id}-${option}`}
          label={option} // Render the option directly
          value={option}
          checked={value.includes(option)}
          onChange={handleChange}
        />
      ))}
    </Form.Group>
  )
}

export default CheckboxInput
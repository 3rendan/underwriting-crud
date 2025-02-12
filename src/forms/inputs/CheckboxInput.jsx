import React from 'react'
import Form from 'react-bootstrap/Form'

const CheckboxInput = ({ label, id, value, onChange, options }) => {
  // Handle checkbox change
  const handleCheckboxChange = (optionValue, isChecked) => {
    const newValue = isChecked
      ? [...value, optionValue] // Add to the array if checked
      : value.filter((val) => val !== optionValue) // Remove from the array if unchecked

    onChange(newValue) // Pass the updated array to the parent
  }

  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <div className='checkbox-grid'>
        {options.map((option) => (
          <Form.Check
            key={option.value}
            type='checkbox'
            id={`${id}-${option.value}`}
            label={option.label}
            checked={value.includes(option.value)} // Check if the option is selected
            onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
          />
        ))}
      </div>
    </Form.Group>
  )
}

export default CheckboxInput
import React from 'react'
import Form from 'react-bootstrap/Form'

const CheckboxInput = ({ label, id, value, onChange, options, disableOnValue }) => {
  // Handle checkbox change
  const handleCheckboxChange = (optionValue, isChecked) => {
    let newValue

    if (optionValue === disableOnValue) {
      // If the disabling option is selected, clear all other selections
      newValue = isChecked ? [optionValue] : []
    } else {
      // Otherwise, update the selected values as usual
      newValue = isChecked
        ? [...value, optionValue] // Add to the array if checked
        : value.filter((val) => val !== optionValue) // Remove from the array if unchecked
    }

    onChange(newValue) // Pass the updated array to the parent
  }

  // Check if the disabling option is selected
  const isDisablingOptionSelected = value.includes(disableOnValue)

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
            disabled={isDisablingOptionSelected && option.value !== disableOnValue} // Disable if the disabling option is selected and this is not the disabling option
          />
        ))}
      </div>
    </Form.Group>
  )
}

export default CheckboxInput
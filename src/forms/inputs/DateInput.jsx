import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' // Import the styles

const DateInput = ({ label, id, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <DatePicker
        selected={value ? new Date(value) : null} // Convert string to Date object
        onChange={(date) => onChange({ target: { id, value: date.toISOString().split('T')[0] } })}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  )
}

export default DateInput
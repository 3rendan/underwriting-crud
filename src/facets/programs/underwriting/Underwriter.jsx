import React, { useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formattedNumber } from '../../../utilities/helpers'
import NumberInput from '../../../forms/inputs/NumberInput'

const Underwriter = ({ underwriter, onAmountChange }) => {
  const [ formData, setFormData ] = useState({
    amount: underwriter.Amount || 0
  })
  const handleChange = (event) => {
    const newAmount = event.target.value
    onAmountChange(underwriter.index, newAmount)
  }

  return (
    <Card key={underwriter.index} className='underwriter-card mb-3'>
      <Card.Title>{underwriter.Underwriter}</Card.Title>
      <Card.Body>
      <NumberInput
        label='Amount'
        name='amount'
        value={`$${formData.amount}`}
        onChange={handleChange}
        placeholder=''
        className='single-row-form'
        // error={errors.amount}
        // isRequired
      />
      </Card.Body>
    </Card>
  )
}

export default Underwriter
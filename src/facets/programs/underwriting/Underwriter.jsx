import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formattedNumber } from '../../../utilities/helpers'

const Underwriter = ({ underwriter, onAmountChange }) => {
  const handleAmountChange = (event) => {
    const newAmount = event.target.value
    onAmountChange(underwriter.index, newAmount)
  }

  return (
    <Card key={underwriter.index} className='underwriter-card mb-3'>
      <Card.Title>{underwriter.Underwriter}</Card.Title>
      <Card.Body>
        <Form.Group controlId={`amount-${underwriter.index}`}>
          <Form.Label><strong>Amount:</strong></Form.Label>
          <Form.Control
            type="number"
            value={underwriter.Amount}
            onChange={handleAmountChange}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  )
}

export default Underwriter
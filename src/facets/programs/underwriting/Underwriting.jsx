import React, { useState } from 'react'
import Underwriter from './Underwriter'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formattedNumber } from '../../../utilities/helpers'

const Underwriting = ({ underwriters, addUnderwriter  }) => {
  const [showForm, setShowForm] = useState(false) // State to control form visibility
  const [underwriter, setUnderwriter] = useState('')
  const [amount, setAmount] = useState(0)
  const [notes, setNotes] = useState('')

  const handleAmountChange = (index, newAmount) => {
    const updatedUnderwriters = underwriters.map((underwriter) =>
      underwriter.index === index ? { ...underwriter, Amount: newAmount } : underwriter
    )
    // setUnderwriters(updatedUnderwriters)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Call the addUnderwriter function with the form data
    addUnderwriter({ Underwriter: underwriter, Amount: amount, Notes: notes })
    setUnderwriter('')
    setAmount(0)
    setNotes('')
    setShowForm(false) // Hide the form after submission
  }
  if(!underwriters) return 'loading...'
  return (
    <Container className='underwriting-container'>
      {/* Centered Button in a Row */}
      <Row className='justify-content-center mb-3'>
        <Col xs='auto'>
          <Button
            variant='success'
            onClick={() => setShowForm(!showForm)} // Toggle form visibility
          >
            {showForm ? 'Cancel' : 'Add Underwriter'}
          </Button>
        </Col>
      </Row>

      {/* Conditionally render the form */}
      {showForm && (
        <Form onSubmit={handleSubmit} className='mt-3'>
          <Form.Group controlId='underwriter'>
            <Form.Label>Underwriter</Form.Label>
            <Form.Control
              type='text'
              value={underwriter}
              onChange={(e) => setUnderwriter(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId='amount'>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type='number'
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              required
            />
          </Form.Group>
          <Form.Group controlId='notes'>
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>
          <div className='text-center mt-3'>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      )}
      <Row class='underwriter-table-headings'>
        <Col><h6>Underwriter</h6></Col>
        <Col><h6>Amount</h6></Col>
        <Col><h6>Epidodes</h6></Col>      
      </Row>
      <br/>
      <div> 
        {underwriters.length === 0 ? (
          <h4 className='text-center'>This program presently has no underwriters</h4>
        ) : (
          underwriters.map((underwriter) => (
            <Underwriter 
            underwriter={underwriter}
            onAmountChange={handleAmountChange} 
          />
          ))
        )}
      </div>
    </Container>
  )
}

export default Underwriting
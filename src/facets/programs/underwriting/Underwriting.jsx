import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Underwriter from './Underwriter'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useUnderwriting } from '../../../context/UnderwritingContext' // Import the context

const Underwriting = ({ program }) => {
  const { createUnderwriter, getUnderwriters } = useUnderwriting() // Use context functions
  const [underwriters, setUnderwriters] = useState([]) // Manage underwriters state locally
  const [showForm, setShowForm] = useState(false) // State to control form visibility
  const [underwriter, setUnderwriter] = useState('')
  const [amount, setAmount] = useState(0)
  const [notes, setNotes] = useState('')

  // Fetch underwriters on component mount
  useEffect(() => {
    const fetchUnderwriters = async () => {
      try {
        const data = await getUnderwriters(program.IDNumber)
        setUnderwriters(data)
      } catch (error) {
        console.error('Error fetching underwriters:', error)
      }
    }

    fetchUnderwriters()
  }, [program.IDNumber, getUnderwriters])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Call the createUnderwriter function with the form data
    createUnderwriter({
      Underwriter: underwriter,
      Amount: amount,
      Notes: notes,
      IDNumber: program.IDNumber,
      Title: program.Title,
    })
      .then((response) => {
        // Reset form fields and hide the form
        setUnderwriter('')
        setAmount(0)
        setNotes('')
        setShowForm(false)

        // Add the new underwriter to the local state
        const newUnderwriter = {
          Underwriter: underwriter,
          Amount: amount,
          Notes: notes,
          IDNumber: program.IDNumber,
          Title: program.Title,
          '@UNID': response.data['@meta'].unid, // Use the UNID from the response
        }
        setUnderwriters((prevUnderwriters) => [...prevUnderwriters, newUnderwriter])
      })
      .catch((error) => {
        console.error('Error adding underwriter:', error)
      })
  }

  if (!underwriters) return 'loading...'

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

      {/* Table Headers */}
      <Row className='underwriter-table-headings'>
        <Col><h6>Underwriter</h6></Col>
        <Col><h6>Amount</h6></Col>
        <Col><h6>Episodes</h6></Col>
        <Col><h6>Notes</h6></Col>
      </Row>

      {/* Underwriters List */}
      <div className='underwriter-table'>
        {underwriters.length === 0 ? (
          <h4 className='text-center'>This program presently has no underwriters</h4>
        ) : (
          underwriters.map((underwriter, index) => (
            <Underwriter
              key={underwriter['@unid']} // Use UNID as the key
              underwriter={underwriter}
              isEvenRow={index % 2 === 0} // Alternate row backgrounds
              title={program.Title}
              id={program.IDNumber}
              unid={underwriter['@unid']}
            />
          ))
        )}
      </div>
    </Container>
  )
}

export default Underwriting
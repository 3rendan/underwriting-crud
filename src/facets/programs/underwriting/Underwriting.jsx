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
  const { createUnderwriter, getUnderwriters, editUnderwriter, deleteUnderwriter } = useUnderwriting() // Use context functions
  const [underwriters, setUnderwriters] = useState([]) // Manage underwriters state locally
  const [showForm, setShowForm] = useState(false) // State to control form visibility
  const [underwriter, setUnderwriter] = useState('')
  const [amount, setAmount] = useState(0)
  const [notes, setNotes] = useState('')
  const [refreshKey, setRefreshKey] = useState(0) // State to trigger refetch

  // Fetch underwriters on component mount or when refreshKey changes
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
  }, [program.IDNumber, getUnderwriters, refreshKey])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUnderwriter({
        Underwriter: underwriter,
        Amount: amount,
        Notes: notes,
        IDNumber: program.IDNumber,
        Title: program.Title,
      })
      // Reset form fields and hide the form
      setUnderwriter('')
      setAmount(0)
      setNotes('')
      setShowForm(false)
      // Trigger a refetch
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error adding underwriter:', error)
    }
  }

  const handleUpdateUnderwriter = async (updatedUnderwriter, unid) => {
    try {
      await editUnderwriter(updatedUnderwriter, unid)
      // Trigger a refetch
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error updating underwriter:', error)
    }
  }

  const handleDeleteUnderwriter = async (unid) => {
    try {
      await deleteUnderwriter(unid)
      // Trigger a refetch
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error deleting underwriter:', error)
    }
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
              onUpdate={handleUpdateUnderwriter} // Pass update handler
              onDelete={handleDeleteUnderwriter} // Pass delete handler
            />
          ))
        )}
      </div>
    </Container>
  )
}

export default Underwriting
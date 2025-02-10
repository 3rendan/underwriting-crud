import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CurrencyInput from '../../../forms/inputs/CurrencyInput'
import { Pencil } from 'react-bootstrap-icons' // Import the pen icon
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useUnderwriting } from '../../../context/UnderwritingContext'

const Underwriter = ({ underwriter, onAmountChange, isEvenRow }) => {
  const { editUnderwriter } = useUnderwriting()
  const [formData, setFormData] = useState({
    amount: underwriter.Amount || 0
  })

  const [duration, setDuration] = useState('')
  const [showModal, setShowModal] = useState(false) // State to control modal visibility
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  useEffect(() => {
    // Construct the date range as contractStartDate to contractEndDate in MM/DD/YYYY format
    if (underwriter?.ContractStartDate && underwriter?.ContractEndDate) {
      const formattedStartDate = formatDate(new Date(underwriter.ContractStartDate))
      const formattedEndDate = formatDate(new Date(underwriter.ContractEndDate))
      setDuration(`${formattedStartDate} to ${formattedEndDate}`)
      setStartDate(formattedStartDate)
      setEndDate(formattedEndDate)
    }
  }, [underwriter])

  const formatDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0')
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }

  const handleChange = (event) => {
    const { value } = event.target
    setFormData({ amount: value }) // Update local state
    onAmountChange(underwriter.index, value) // Pass the value to the parent component
  }

  const handleEditClick = () => {
    setShowModal(true) // Show the modal when the pen icon is clicked
  }

  const handleSave = () => {
    // Update the duration and close the modal
    setDuration(`${startDate} to ${endDate}`)
    setShowModal(false)
  }

  const handleClose = () => {
    setShowModal(false) // Close the modal without saving
  }

  if (underwriter === undefined) return 'loading...'

  return (
    <>
      <Row className={`underwriter-row ${isEvenRow ? 'even-row' : 'odd-row'}`}>
        <Col className='mt-2'>{underwriter.Underwriter}</Col>
        <Col>
          <CurrencyInput
            name='amount'
            value={formData.amount}
            onChange={handleChange}
            placeholder=''
            className='single-row-form'
          />
        </Col>
        <Col className='text-center'>{underwriter.Episodes}</Col>
        <Col className='d-flex text-center justify-content-center'>
          {duration}
          <Pencil className='ms-2 edit-icon mt-2' onClick={handleEditClick} /> {/* Pen icon */}
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Duration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='startDate'>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type='text'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder='MM/DD/YYYY'
              />
            </Form.Group>
            <Form.Group controlId='endDate'>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type='text'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder='MM/DD/YYYY'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Underwriter
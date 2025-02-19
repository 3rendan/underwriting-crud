import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Pencil, Trash } from 'react-bootstrap-icons'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import TextInput from '../../../forms/inputs/TextInput'
import IntegerInput from '../../../forms/inputs/IntegerInput'
import TextAreaInput from '../../../forms/inputs/TextAreaInput'
import CurrencyInput from '../../../forms/inputs/CurrencyInput'
import CheckboxInput from '../../../forms/inputs/CheckboxInput'

const Underwriter = ({ underwriter, isEvenRow, id, title, unid, episodeOptions, onUpdate, onDelete }) => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    Underwriter: underwriter.Underwriter || '',
    Amount: underwriter.Amount || 0,
    Notes: underwriter.Notes || '',
    Episodes: underwriter.Episodes || [], // Initialize episodes from the underwriter object
    IDNumber: id,
    Title: title,
    DurationSeconds: underwriter.DurationSeconds || '',
  })
  const [amountError, setAmountError] = useState('') // State to track Amount validation error

  const handleEditClick = () => {
    setShowModal(true)
    setAmountError('') // Clear any previous error when opening the modal
  }

  const handleSave = async () => {
    // Validate the Amount field
    if (!formData.Amount || formData.Amount <= 0) {
      setAmountError('Amount is required and must be greater than 0.')
      return // Prevent form submission
    }

    try {
      await onUpdate(formData, unid) // Call the onUpdate function
      setShowModal(false)
    } catch (error) {
      console.error('Error updating underwriter:', error)
    }
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCurrencyChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setAmountError('') // Clear error when the user updates the Amount field
  }

  // Handle checkbox changes for episodes
  const handleCheckboxChange = (selectedEpisodes) => {
    setFormData((prevData) => ({
      ...prevData,
      Episodes: selectedEpisodes,
    }))
  }

  const handleDelete = async () => {
    try {
      await onDelete(unid) // Call the onDelete function
    } catch (error) {
      console.error('Error deleting underwriter:', error)
    }
  }

  if (underwriter === undefined || !title || !id) return 'loading...'

  return (
    <>
      <Row className={`underwriter-row ${isEvenRow ? 'even-row' : 'odd-row'}`}>
        {/* Icons column (far left, outside the table) */}
        <Col xs='auto' className='icons-column'>
          <Pencil className='edit-icon' onClick={handleEditClick} />
          <Trash className='delete-icon ms-2' onClick={handleDelete} />
        </Col>
        {console.log(underwriter)}
        <Col className='mt-2'>{underwriter.Underwriter}</Col>
        <Col className='mt-2'>{underwriter.Amount}</Col>
        <Col className='mt-2'>{underwriter.Episodes}</Col>
        <Col className='mt-2'>{underwriter.DurationSeconds}</Col>
        <Col className='mt-2'>{underwriter.ContractStartDate}</Col>
        <Col className='mt-2'>{underwriter.ContractEndDate}</Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Underwriting Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <TextInput
              label='Underwriter'
              id='Underwriter'
              name='Underwriter'
              value={formData.Underwriter}
              onChange={handleInputChange}
            />
            <CurrencyInput
              label='Amount'
              name='Amount'
              value={formData.Amount}
              onChange={handleCurrencyChange}
              placeholder='Amount'
              isRequired
            />
            {amountError && <p className='validation-error'>{amountError}</p>} {/* Display error message */}
            <IntegerInput
              label='Duration'
              name='DurationSeconds'
              value={formData.DurationSeconds}
              onChange={handleInputChange}
              placeholder='Duration'
            />
            {episodeOptions !== 'Single Program' && (
              <CheckboxInput
                label='Episode(s)'
                id='episodes'
                value={formData.Episodes}
                onChange={handleCheckboxChange}
                options={episodeOptions}
                disableOnValue='Series' // Pass the value that should disable other options
              />
            )}
            <TextAreaInput
              label='Notes'
              id='Notes'
              name='Notes'
              value={formData.Notes}
              onChange={handleInputChange}
            />
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
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Pencil, Trash } from 'react-bootstrap-icons' // Import the Trash icon
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import TextInput from '../../../forms/inputs/TextInput'
import TextAreaInput from '../../../forms/inputs/TextAreaInput'
import CurrencyInput from '../../../forms/inputs/CurrencyInput'

const Underwriter = ({ underwriter, isEvenRow, id, title, unid, onUpdate, onDelete }) => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    Underwriter: underwriter.Underwriter || '',
    Amount: underwriter.Amount || 0,
    Notes: underwriter.Notes || '',
    IDNumber: id,
    Title: title,
  })

  const handleEditClick = () => {
    setShowModal(true)
  }

  const handleSave = async () => {
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
        <Col xs='auto' className='mt-2'>
          <Pencil className='edit-icon' onClick={handleEditClick} /> {/* Edit icon */}
          <Trash className='delete-icon ms-2' onClick={handleDelete} /> {/* Delete icon */}
        </Col>
        <Col className='mt-2'>{underwriter.Underwriter}</Col>
        <Col className='mt-2'>{underwriter.Amount}</Col>
        <Col className='mt-2'>{underwriter.Episodes}</Col>
        <Col className='mt-2'>{underwriter.Notes}</Col>
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
              className='single-row-form'
            />
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
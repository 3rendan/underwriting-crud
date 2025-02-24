import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Underwriter from './Underwriter'
import TextInput from '../../../../forms/inputs/TextInput'
import TextAreaInput from '../../../../forms/inputs/TextAreaInput'
import CurrencyInput from '../../../../forms/inputs/CurrencyInput'
import IntegerInput from '../../../../forms/inputs/IntegerInput'
import CheckboxInput from '../../../../forms/inputs/CheckboxInput'
import DateInput from '../../../../forms/inputs/DateInput'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { useUnderwriting } from '../../../../context/UnderwritingContext'

const Underwriting = ({ program }) => {
  const {
    createUnderwriter,
    getUnderwriters,
    editUnderwriter,
    deleteUnderwriter,
    getUnderwritingEpisodes,
  } = useUnderwriting()

  const [underwriters, setUnderwriters] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [episodeOptions, setEpisodeOptions] = useState([])
  const [amountError, setAmountError] = useState('') // State to track Amount validation error
  const [formData, setFormData] = useState({
    underwriter: '',
    amount: '',
    notes: '',
    episodes: [],
    duration: '',
    uwStartDate: '', // Add uwStartDate to formData
    uwEndDate: '', // Add uwEndDate to formData
  })
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [underwriterToDelete, setUnderwriterToDelete] = useState(null)

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

  // Fetch episode options
  useEffect(() => {
    if (!program || !program.IDNumber) {
      console.error('Program or program.IDNumber is undefined')
      return
    }

    const fetchEpisodeOptions = async () => {
      try {
        const data = await getUnderwritingEpisodes(program.IDNumber)
        setEpisodeOptions(data)
      } catch (error) {
        console.error('Error fetching underwriting episodes:', error)
      }
    }

    fetchEpisodeOptions()
  }, [program.IDNumber, getUnderwritingEpisodes])

  const handleCurrencyChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setAmountError('') // Clear error when the user updates the Amount field
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const episodesValue = episodeOptions === 'Single Program' ? 'Single Program' : formData.episodes
      await createUnderwriter({
        Underwriter: formData.underwriter,
        Amount: formData.Amount,
        Notes: formData.notes,
        Episodes: episodesValue,
        IDNumber: program.IDNumber,
        Title: program.Title,
        DurationSeconds: formData.DurationSeconds,
        ContractStartDate: formData.uwStartDate,
        ContractEndDate: formData.uwEndDate,
      })

      // Reset form fields and hide the modal
      setFormData({
        underwriter: '',
        amount: '',
        notes: '',
        episodes: [],
        duration: '',
        uwStartDate: '',
        uwEndDate: '',
      })
      setShowModal(false)

      // Trigger a refetch
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error adding underwriter:', error)
    }
  }

  // Handle input changes for text, number, and date fields
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  // Handle checkbox changes for episodes
  const handleCheckboxChange = (selectedEpisodes) => {
    setFormData((prevData) => ({
      ...prevData,
      episodes: selectedEpisodes,
    }))
  }

  // Handle delete confirmation
  const handleDeleteUnderwriter = (unid) => {
    setUnderwriterToDelete(unid)
    setShowDeleteModal(true)
  }

  const confirmDelete = async () => {
    if (!underwriterToDelete) return

    try {
      await deleteUnderwriter(underwriterToDelete)
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error deleting underwriter:', error)
    } finally {
      setShowDeleteModal(false)
      setUnderwriterToDelete(null)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleUpdateUnderwriter = async (updatedUnderwriter, unid) => {
    try {
      await editUnderwriter(updatedUnderwriter, unid)
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error updating underwriter:', error)
    }
  }

  if (!underwriters || !episodeOptions) return 'loading...'

  return (
    <Container className='underwriting-container'>
      {/* Centered Button in a Row */}
      <Row className='justify-content-center mb-3'>
        <Col xs='auto'>
          <Button variant='success' onClick={() => setShowModal(true)}>
            Add Underwriter
          </Button>
        </Col>
      </Row>

      {/* Modal for adding underwriter */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Underwriter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <TextInput
              label='Underwriter'
              id='underwriter'
              name='underwriter'
              value={formData.underwriter}
              onChange={handleChange}
              required
            />
            <CurrencyInput
              label='Amount'
              name='Amount'
              value={formData.Amount}
              onChange={handleCurrencyChange}
              placeholder='Amount'
              isRequired
            />
            <TextAreaInput
              label='Notes'
              id='notes'
              name='notes'
              value={formData.notes}
              onChange={handleChange}
            />
            <IntegerInput
              label='Duration'
              name='DurationSeconds'
              value={formData.DurationSeconds}
              onChange={handleInputChange}
              placeholder='Duration'
            />
            {console.log(episodeOptions)}
            { episodeOptions !== 'Single Program' &&
              <CheckboxInput
                label='Episode(s)'
                id='episodes'
                value={formData.episodes}
                onChange={handleCheckboxChange}
                options={episodeOptions}
              />
            }
            <div className='text-center mt-3'>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Confirmation Modal for Delete */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this underwriter? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant='danger' onClick={confirmDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Table Headers */}
      <Row className='underwriter-table-headings text-center'>
        <Col><h6>Underwriter</h6></Col>
        <Col><h6>Amount</h6></Col>
        <Col><h6>Episodes</h6></Col>
        <Col><h6>Duration</h6></Col>
      </Row>

      {/* Underwriters List */}
      <div className='underwriter-table'>
        {underwriters.length === 0 ? (
          <h4 className='text-center'>This program presently has no underwriters</h4>
        ) : (
          underwriters.map((underwriter, index) => (
            <Underwriter
              key={underwriter['@unid']}
              underwriter={underwriter}
              isEvenRow={index % 2 === 0}
              title={program.Title}
              id={program.IDNumber}
              unid={underwriter['@unid']}
              onUpdate={handleUpdateUnderwriter}
              onDelete={handleDeleteUnderwriter}
              episodeOptions={episodeOptions}
            />
          ))
        )}
      </div>
    </Container>
  )
}

export default Underwriting
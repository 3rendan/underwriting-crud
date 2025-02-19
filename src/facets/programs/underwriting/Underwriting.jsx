import React, { useState, useEffect } from 'react'
import Underwriter from './Underwriter'
import TextInput from '../../../forms/inputs/TextInput'
import TextAreaInput from '../../../forms/inputs/TextAreaInput'
import IntegerInput from '../../../forms/inputs/IntegerInput'
import CheckboxInput from '../../../forms/inputs/CheckboxInput'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { useUnderwriting } from '../../../context/UnderwritingContext'

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
  const [formData, setFormData] = useState({
    underwriter: '',
    amount: '',
    notes: '',
    episodes: [], // Store selected episodes as an array
  })

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

  // // Fetch episode options
  // useEffect(() => {
  //   // if (!program || !program.IDNumber) {
  //   //   console.error('Program or program.IDNumber is undefined')
  //   //   return
  //   // }

  //   // const fetchEpisodeOptions = async () => {
  //   //   try {
  //   //     const data = await getUnderwritingEpisodes(program.IDNumber)
  //   //     setEpisodeOptions(data)
  //   //   } catch (error) {
  //   //     console.error('Error fetching underwriting episodes:', error)
  //   //   }
  //   // }

  //   // fetchEpisodeOptions()
  // }, [program.IDNumber, getUnderwritingEpisodes])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUnderwriter({
        Underwriter: formData.underwriter,
        Amount: parseFloat(formData.amount),
        Notes: formData.notes,
        Episodes: formData.episodes, // Include selected episodes
        IDNumber: program.IDNumber,
        Title: program.Title,
      })

      // Reset form fields and hide the modal
      setFormData({
        underwriter: '',
        amount: '',
        notes: '',
        episodes: [],
      })
      setShowModal(false)

      // Trigger a refetch
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error adding underwriter:', error)
    }
  }

  // Handle input changes for text and number fields
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

  const handleUpdateUnderwriter = async (updatedUnderwriter, unid) => {
    try {
      await editUnderwriter(updatedUnderwriter, unid)
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error updating underwriter:', error)
    }
  }

  const handleDeleteUnderwriter = async (unid) => {
    try {
      await deleteUnderwriter(unid)
      setRefreshKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error deleting underwriter:', error)
    }
  }

  if (!underwriters || !episodeOptions) return 'loading...'

  return (
    <Container className='underwriting-container'>
      <Row className='justify-content-center mb-3'>
        <Col xs='auto'>
          <Button variant='success' onClick={() => setShowModal(true)}>
            Add Underwriter
          </Button>
        </Col>
      </Row>
     
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Underwriter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <TextInput
              label='Underwriter'
              id='underwriter'
              value={formData.underwriter}
              onChange={handleChange}
              required
            />
            <IntegerInput
              label='Amount'
              id='amount'
              value={formData.amount}
              onChange={handleChange}
              required
            />
            <TextAreaInput
              label='Notes'
              id='notes'
              value={formData.notes}
              onChange={handleChange}
            />
            {/* <CheckboxInput
              label='Episode(s)'
              id='episodes'
              value={formData.episodes}
              onChange={handleCheckboxChange}
              options={episodeOptions}
            /> */}
            <div className='text-center mt-3'>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Row className='underwriter-table-headings text-center'>
        <Col><h6>Underwriter</h6></Col>
        <Col><h6>Amount</h6></Col>
        <Col><h6>Episodes</h6></Col>
        <Col><h6>Duration</h6></Col>
        <Col><h6>Contract Start</h6></Col>
        <Col><h6>Contract End</h6></Col>
      </Row>

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
            />
          ))
        )}
      </div>
    </Container>
  )
}

export default Underwriting
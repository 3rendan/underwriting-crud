import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import ProgramsContext from '../../context/ProgramsContext'
import UnderwritingContext from '../../context/UnderwritingContext'
import ProgramTombstone from './ProgramTombstone'
import Underwriting from './tabs/underwriting/Underwriting'
import ProgramInfo from './tabs/programInfo/ProgramInfo'
import AssociatedDocuments from './tabs/associatedDocuments/AssociatedDocuments'
import Pricing from './tabs/pricing/Pricing'
import MySpinner from '../../utilities/MySpinner'
import { displayTitle } from '../../utilities/helpers'
import { initializeFormData } from '../../forms/formData/programFormDataUtils'

const ProgramPage = () => {
  const { getProgram, editProgram } = useContext(ProgramsContext)
  const { getUnderwriters, createUnderwriter } = useContext(UnderwritingContext)
  const { id } = useParams()
  const [program, setProgram] = useState(null)
  const [ unid, setUnid ] = useState(null)
  const [underwriters, setUnderwriters] = useState(null)
  const [formData, setFormData] = useState(initializeFormData({}))

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const data = await getProgram(id)
        setProgram(data)
        setUnid(data['@meta'].unid)
        // Initialize formData with program data after fetching
        setFormData(initializeFormData(data))
      } catch (error) {
        console.error('Failed to fetch program:', error)
      }
    }

    fetchProgram()
  }, [id, getProgram])

  useEffect(() => {
    if (program && program.IDNumber) {
      const fetchUnderwriters = async () => {
        try {
          const data = await getUnderwriters(program.IDNumber)
          setUnderwriters(data)
        } catch (error) {
          console.error('Failed to fetch underwriters:', error)
        }
      }

      fetchUnderwriters()
    }
  }, [program, getUnderwriters])

  const handleAddUnderwriter = async (formData) => {
    try {
      const params = {
        Title: program.Title,
        Underwriter: formData.Underwriter,
        Amount: formData.Amount,
        Notes: formData.Notes,
        ProgramService: program.ProgramService,
        Form: 'Underwriting',
        IDNumber: program.IDNumber,
      }

      const newUnderwriter = await createUnderwriter(params)
      setUnderwriters([...underwriters, newUnderwriter])
    } catch (error) {
      console.error('Failed to add underwriter:', error)
    }
  }

  const handleSave = async () => {
    try {
      await editProgram(formData, unid) // Use the program's UNID
      console.log('Program updated successfully')
    } catch (error) {
      console.error('Failed to update program:', error)
    }
  }

  if (!program || !underwriters) return <MySpinner />

  return (
    <Container className='program-page-container'>
      <div class='sticky-top' style={{top: '15vh'}}>
        <ProgramTombstone program={program} />
      </div>
      <Container>
        <Tabs
          defaultActiveKey='programInfo'
          id='program-details-tabs'
          className='mb-3 border-bottom'
          fill
        >
          <Tab eventKey='programInfo' title='Program Info'>
            <Container className='program-details-container py-3'>
              <ProgramInfo program={program} formData={formData} setFormData={setFormData} />
            </Container>
          </Tab>
          <Tab eventKey='associatedDocuments' title='Associated Documents'>
            <AssociatedDocuments program={program} />
          </Tab>
          <Tab eventKey='pricing' title='Pricing'>
            <Pricing program={program} />
          </Tab>
          <Tab eventKey='underwriting' title='Underwriting'>
            <Container className='program-details-container py-3'>
              <Underwriting
                underwriters={underwriters}
                addUnderwriter={handleAddUnderwriter}
                program={program}
              />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </Container>

  )
}

export default ProgramPage
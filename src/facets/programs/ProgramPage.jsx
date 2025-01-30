import React, { useEffect, useState, useContext } from 'react'
import ProgramsContext from '../../context/ProgramsContext'
import UnderwritingContext from '../../context/UnderwritingContext'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ProgramTombstone from './ProgramTombstone'
import Underwriting from './tabs/Underwriting'
import ProgramInfo from './tabs/ProgramInfo'

const ProgramPage = () => {
  const { getProgram } = useContext(ProgramsContext)
  const { getUnderwriters, createUnderwriter } = useContext(UnderwritingContext)
  const { id } = useParams()
  const [program, setProgram] = useState(null)
  const [underwriters, setUnderwriters] = useState(null)

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const data = await getProgram(id)
        setProgram(data)
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
      // Define the parameters for the new underwriter using form data
      const params = {
        Title: program.Title, // Use the program's Title
        Underwriter: formData.Underwriter, // Use the value from the form
        Amount: formData.Amount, // Use the value from the form
        Notes: formData.Notes, // Use the value from the form
        UWType: program.ProgramService, // Hardcoded as per requirements
        Form: 'Underwriting', // Hardcoded as per requirements
      }

      // Call the createUnderwriter function from context
      const newUnderwriter = await createUnderwriter(params)

      // Update the underwriters state with the new underwriter
      setUnderwriters([...underwriters, newUnderwriter])
    } catch (error) {
      console.error('Failed to add underwriter:', error)
    }
  }

  if (!program || !underwriters) return <p>Loading...</p>

  return (
    <>
      <h2 className='text-center mb-3'>{program.Title}</h2>
      <ProgramTombstone program={program} />
      <Container>
        {/* Tabs with full width */}
        <Tabs
          defaultActiveKey='programInfo'
          id='program-details-tabs'
          className='mb-3 border-bottom'
          fill
        >
          <Tab eventKey='programInfo' title='Program Info'>
            {/* Tab Content Directly Underneath */}
            <Container className='program-details-container py-3'>
              <ProgramInfo program={program} />
            </Container>
          </Tab>
          <Tab eventKey='underwriting' title='Underwriting'>
            <Container className='program-details-container py-3'>
              <Underwriting
                underwriters={underwriters}
                addUnderwriter={handleAddUnderwriter} // Pass the function down
              />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </>
  )
}

export default ProgramPage
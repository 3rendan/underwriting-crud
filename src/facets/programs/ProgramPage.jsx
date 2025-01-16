import React, { useEffect, useState, useContext } from 'react'
import ProgramsContext from '../../context/ProgramsContext'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ProgramTombstone from './ProgramTombstone'
import Underwriting from './tabs/Underwriting'
import ProgramInfo from './tabs/ProgramInfo'

const ProgramDetails = () => {
  const { getProgram } = useContext(ProgramsContext)
  const { id } = useParams()
  const [program, setProgram] = useState(null)

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

  if (!program) return <p>Loading...</p>

  return (
    <>
      <h2 className='text-center mb-3'>{program.Title}</h2>
      <ProgramTombstone program={program} />
      <Tabs
        defaultActiveKey='programInfo'
        id='program-details-tabs'
        className='mb-3 custom-tabs'
      >
        <Tab eventKey='programInfo' title='Program Info'>
          <Container className='program-details-container'>
            <ProgramInfo program={program} />
          </Container>
        </Tab>
        <Tab eventKey='underwriting' title='Underwriting'>
          <Container className='program-details-container'>
            <Underwriting program={program} />
          </Container>
        </Tab>
      </Tabs>
    </>
  )
}

export default ProgramDetails

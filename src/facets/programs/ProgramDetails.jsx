import React, { useEffect, useState, useContext } from 'react'
import ProgramsContext from '../../context/ProgramsContext'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Underwriting from './accordions/Underwriting'
import BroadcastRights from './accordions/BroadcastRights'
import SixAvailability from './accordions/SixAvailability'
import Licensees from './accordions/Licensees'
import MediaManagerAvailability from './accordions/MediaManagerAvailability'

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
    <Container className='program-details-container'>
      <img src='https://placeholder.com/400x225' alt='placeholder img' />
      <div className='accordions'>
        <Underwriting program={program}/>     
        <BroadcastRights program={program}/>     
        <SixAvailability program={program}/>     
        <Licensees program={program}/>     
        <MediaManagerAvailability program={program}/>     
      </div>
    </Container>
    </>
  )
}

export default ProgramDetails

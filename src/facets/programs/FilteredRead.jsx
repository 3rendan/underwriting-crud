import React, { useContext, useEffect } from 'react'
import ProgramsContext from '../../context/ProgramsContext'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const Read = () => {
  const { programs } = useContext(ProgramsContext)

  return (
    <div className=' filtered-container'>
      <h2 className='text-center mb-3'>Exchange Programs</h2>
      <ul>
        {programs.filter(program => program.ProgramService === 'Exchange').map((program) => (
          <Card key={program.IDNumber} className='mb-3'>
            <Card.Header className='text-center'>
              {program.ProgramTitle ? program.ProgramTitle : program.Title}
            </Card.Header>
            {console.log(program)}
          </Card>
        ))}
      </ul>
    </div>
  )
}

export default Read
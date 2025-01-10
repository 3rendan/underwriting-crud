import React, { useContext, useEffect } from 'react'
import ProgramsContext from '../../context/ProgramsContext'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const Read = () => {
  const { programs, loadMorePrograms, hasMore } = useContext(ProgramsContext)

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 20
    ) {
      if (hasMore) {
        loadMorePrograms()
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore]) // Reattach listener when `hasMore` changes

  return (
    <Container>
      <h2 className='text-center mb-3'>Programs</h2>
      <ul>
        {programs.map((program) => (
          <Card key={program.IDNumber} className='mb-3'>
            <Card.Header className='text-center'>
              {program.ProgramTitle ? program.ProgramTitle : program.Title}
            </Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <strong>Broadcast Rights:{' '}</strong>
                  {program.BroadcastRights ? program.BroadcastRights : 'rights are never given, only taken'}
                </li>
                <li>
                  Provided by:{' '}
                  {program.ProgramService ? program.ProgramService : 'who knows'}
                </li>
              </ul>
            </Card.Body>
          </Card>
        ))}
      </ul>
      {!hasMore && <p className='text-center'>No more programs to load.</p>}
    </Container>
  )
}

export default Read
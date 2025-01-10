import React, { useContext, useEffect } from 'react'
import ProgramsContext from '../context/ProgramsContext'
import Card from 'react-bootstrap/Card'

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
    <div>
      <h2 className='text-center'>Programs</h2>
      <ul>
        {programs.map((program) => (
          <Card key={program.IDNumber}>
            <Card.Header className='text-center'>
              {program.ProgramTitle ? program.ProgramTitle : program.Title}
            </Card.Header>
            <Card.Body>
              <ul>
                <li>
                  Broadcast Rights:{' '}
                  {program.BroadcastRights ? program.BroadcastRights : 'who knows'}
                </li>
                <li>
                  Provided by:{' '}
                  {program.ProgramService ? program.ProgramService : 'who knows'}
                </li>
                <li>
                  Program Summary:{' '}
                  {program.ProgramSummary ? program.ProgramSummary : 'watch it and write your own'}
                </li>
              </ul>
            </Card.Body>
          </Card>
        ))}
      </ul>
      {!hasMore && <p className='text-center'>No more programs to load.</p>}
    </div>
  )
}

export default Read

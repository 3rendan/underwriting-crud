import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProgramsContext from '../../context/ProgramsContext'
import Card from 'react-bootstrap/Card'
import { AuthContext } from '../../context/AuthContext'
import { displayTitle } from '../../utilities/helpers'

const ProgramsList = () => {
  const { programs } = useContext(ProgramsContext)
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) return 'loading...'

  // Filter out programs with invalid titles
  const filteredPrograms = programs.filter((program) => {
    const title = program.ProgramTitle ? program.ProgramTitle : program.Title

    // Check if the title is not blank or empty
    if (!title || title.trim() === '') {
      return false
    }

    // Check if the title starts with a letter or number
    const firstChar = title.charAt(0)
    return /[a-zA-Z0-9]/.test(firstChar)
  })

  // Sort programs alphabetically by Title or ProgramTitle
  const sortedPrograms = filteredPrograms.sort((a, b) => {
    const titleA = a.ProgramTitle ? a.ProgramTitle : a.Title
    const titleB = b.ProgramTitle ? b.ProgramTitle : b.Title
    return titleA.localeCompare(titleB)
  })

  if(!sortedPrograms) return 'loading...'

  return (
    <div>
      <ul>
        {sortedPrograms.map((program) => (
          <Link
            to={`/program/${program['@unid']}`}
            key={program['@unid']}
            style={{ textDecoration: 'none' }}
          >
            <Card className='mb-3'>
              <Card.Header>
                {displayTitle(program.Title)}
                {program.season && ` Season ${program.season}`}
              </Card.Header>
              <Card.Body className='program-card-body'>
                <p>{program.ProgramStatus}</p>
                <p>{program.ContractStartDate}</p>
                <p>{program.ContractEndDate}</p>
                <p>{program?.BroadcastRights}</p>
                <p>{program?.ProgramService}</p>
                <p>{program?.NolaCode}</p>
                <p>{program?.ProgramLength}</p>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default ProgramsList
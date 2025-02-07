import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProgramsContext from '../../context/ProgramsContext'
import Card from 'react-bootstrap/Card'
import { AuthContext } from '../../context/AuthContext'

const ProgramsList = () => {
  const { programs } = useContext(ProgramsContext)
  const { isAuthenticated } = useContext(AuthContext)



  return (
    <div>
      <ul>
        { programs.map((program) => (
          <Link
            to={`/program/${ program['@unid'] }`}
            key={ program['@unid']}
            style={{ textDecoration: 'none' }}
          >
            <Card className='mb-3'>
              <Card.Header>
                { program.ProgramTitle ? program.ProgramTitle : program.Title}{ program.season && ` Season ${program.season}`}
              </Card.Header>
              <Card.Body className='program-card-body'>
                <p>{ program.ProgramStatus }</p>
                <p>{ program.ContractStartDate }</p>
                <p>{ program.ContractEndDate }</p>
                <p>{ program?.BroadcastRights }</p>
                <p>{ program?.ProgramService }</p>
                <p>{ program?.NolaCode }</p>
                <p>{ program?.ProgramLength }</p>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default ProgramsList

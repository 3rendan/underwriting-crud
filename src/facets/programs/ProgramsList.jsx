import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProgramsContext from '../../context/ProgramsContext'
import Card from 'react-bootstrap/Card'

const ProgramsList = () => {
  const { programs } = useContext(ProgramsContext)

  return (
    <div>
      <ul>
        { programs.map((program) => (
          <Link
            to={`/program/${ program['@meta'].unid }`}
            key={ program['@meta'].unid}
            style={{ textDecoration: 'none' }}
          >
            <Card className='mb-3'>
              <Card.Header>
                { program.ProgramTitle ? program.ProgramTitle : program.Title}
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

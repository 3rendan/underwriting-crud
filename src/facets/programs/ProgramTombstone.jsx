import React from 'react'
import { formatContractDate, formatProjectedReleaseDate } from '../../utilities/helpers'

const ProgramTombstone = ({ program }) => {

  if (!program) return 'loading...'

  return (
    <>
      <div className='tombstone mb-2'>
        tombstone
        {/* <p>
          <strong>Program service:</strong> {` ${program.ProgramService}`}
          {program.Presentation === 'Yes' && ' Presentation'}
        </p>
        <p>
          <strong>Supplier:</strong> {program.SupplierCompany}
        </p>
        <p>
          <strong>Status:</strong> {program.ProgramStatus}
        </p>
        <p>
          <strong># of Episodes:</strong> {program.NumberOfEpisodes}
        </p>
        <p>
          <strong>Release date:</strong>{' '}
          {formatProjectedReleaseDate(program.ProjectedReleaseDate)}
        </p>
        <p>
          <strong>Length of Program:</strong> {program.ProgramLength}
        </p>
        <p>
          <strong>Contract start date:</strong>{' '}
          {formatContractDate(program.ContractStartDate)}
        </p>
        <p>
          <strong>Contract end date:</strong> {formatContractDate(program.ContractEndDate)}
        </p>
        <p>
          <strong>Broadcast Rights:</strong> {program.BroadcastRights}
        </p>
        <p>
          <strong># of current licensees:</strong> {program.CurrentLicensees}
        </p>
        <p>
          <strong>NOLA Code:</strong> {program.NolaCode}
        </p> */}
      </div>
    </>
  )
}

export default ProgramTombstone
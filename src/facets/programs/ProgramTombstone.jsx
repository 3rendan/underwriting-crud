import React from 'react'
import { formatContractDate, formatDateString, formatProjectedReleaseDate } from '../../utilities/helpers'

const ProgramTombstone = ({ program }) => {

  // MAKE THIS STICKY

  if (!program) return 'loading...'

  return (
    <>
      <div className='tombstone mb-2'>
        {/* 1st column */}
        <div class='column1'>
          <p>
            <strong>Program service:</strong> {` ${program.ProgramService}`}
            {program.Presentation === 'Yes' && ' Presentation'}
          </p>
          <p> 
            <strong>Broadcast Rights:</strong> {program.BroadcastRights}
          </p>
          <p>
            <strong>Supplier:</strong>{' '} {program.SupplierCompany}
          </p>
          <p>
            <strong>Status:</strong>{' '} {program.ProgramStatus}
          </p>
        </div>
        <div class='column2'>
          <p>
            <strong>Release date:</strong>{' '}
            {program.ProjectedReleaseDate ? formatDateString(program.ProjectedReleaseDate) : '' } 
          </p>

          <p>
            <strong>Contract start date:</strong>{' '}
            {program.ContractStartDate ? formatContractDate(program.ContractStartDate) : ''}
          </p>
          <p>
            <strong>Contract end date:</strong> {' '}
            {program.ContractEndDate ? formatContractDate(program.ContractEndDate) : ''}
          </p>
          <p>
            <strong># of current licensees:</strong> {program.CurrentLicensees} {/* THIS NEEDS TO BE CALCULATED FROM PRICING */}
          </p>
        </div>
        <div class='column3'>
          <p>
            <strong>Program Length:</strong>{' '} {program.ProgramLength}
          </p>
          <p>
            <strong># of Episodes:</strong> {program.NumberOfEpisodes}
          </p>
          <p>
            <strong>NOLA Code:</strong> {program.NolaCode}
          </p>
          <p>
            <strong>EIDR:</strong> Get this in the program record
          </p>
        </div>
      </div>
    </>
  )
}

export default ProgramTombstone
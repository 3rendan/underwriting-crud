import React from 'react'

const ProgramTombstone = ({program}) => {

  const formatDateTime = (dateString) => {
    const date = new Date(dateString)
    const options = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true // Ensures time is in 12-hour format with AM/PM
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }

  if(!program) return 'loading...'

  return (
    <>
      <div className='tombstone mb-2'>
        <p><strong>Program service:</strong> {program.ProgramService}</p>
        <p><strong>Supplier:</strong> {program.SupplierCompany}</p>
        <p><strong>Status:</strong> {program.ProgramStatus}</p>
        <p><strong># of Episodes:</strong> {program.NumberOfEpisodes}</p>
        <p><strong>Release date:</strong> { program.ProjectedReleaseDate }</p>
        <p><strong>Length of Program:</strong> {program.ProgramLength}</p>
        <p><strong>Contract end date:</strong> {program.ContractEndDate}</p>
        <p><strong>Broadcast Rights:</strong> {program.BroadcastRights}</p>
        <p><strong># of current licensees:</strong> {program.CurrentLicensees}</p>
        <p><strong>NOLA Code:</strong> {program.NolaCode}</p>
      </div>
    </>
  )
}

export default ProgramTombstone

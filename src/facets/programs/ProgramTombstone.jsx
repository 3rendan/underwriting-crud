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
      <div className='tombstone'>
        <p><strong>Author</strong> {program.Author}</p>
        <p><strong>Last modified on</strong> {formatDateTime(program['@meta'].lastmodified)}</p>
        <p><strong>Updated by</strong> { program.UpdatedBy ? program.UpdatedBy : program.Author }</p>
        <p><strong>Added file</strong> {formatDateTime(program['@meta'].addedtofile)}</p>
        { program.ProjectedReleaseDate && <p><strong>Projected Release Date</strong> {program.ProjectedReleaseDate}</p>}
        <p><strong>Supplied by</strong> {program.SupplierCompany}</p>
        <p><strong>Classification</strong> {program.Classification}</p>
      </div>
    </>
  )
}

export default ProgramTombstone

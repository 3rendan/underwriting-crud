import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

const Underwriting = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <p>
        <strong>Underwriters:</strong> {program.NationalUnderwriter}
      </p>
      <p>
        <strong>Local Underwriting:</strong> {program.ProgramStatus}
      </p>
      <p>
        <strong>Restrictions:</strong> {program.LocalUnderwritingRestrictions}
      </p>
    </Container>
  )
}

export default Underwriting

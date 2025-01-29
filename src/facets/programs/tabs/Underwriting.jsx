import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

const Underwriting = ({ underwriters }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      this is underwriting
      { underwriters === undefined ? 
        `<h1>This program presently has no underwriters</h1>` :
        underwriters.map((underwriter) => (
          <p>{underwriter.Underwriter}</p>
        )
      )}
    </Container>
  )
}

export default Underwriting

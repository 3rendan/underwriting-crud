import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const InfoAccordion = ({ label, message }) => {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant='link' eventKey='1'>
            {label}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body>{message}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default InfoAccordion
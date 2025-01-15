import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'

const SixAvailability = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sixAvailability, setSixAvailability] = useState()

  useEffect(() => {
    setSixAvailability(program.sIXAvailability === 'yes')
  }, [program])

  const onMutate = (event) => {
    const value = event.target.checked ? 'yes' : 'no'
    setSixAvailability(event.target.checked)
    console.log(`sIX Availability set to: ${value}`)
  }

  if (sixAvailability === undefined) return 'loading...'

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header
          eventKey='0'
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span style={{ marginLeft: '10px' }}>sIX Availability</span>
        </Accordion.Header>
        <Accordion.Collapse eventKey='0'>
          <Accordion.Body>
            <Form>
              <Form.Group 
                controlId='sixAvailability' 
                className='d-flex align-items-center justify-content-between'
              >
                <Form.Label className='mb-0'>Is it available on sIX?</Form.Label>
                <div className='switch-wrapper'>
                  <span className={`availability-text ${sixAvailability ? 'text-yes' : 'text-no'}`}>
                    {sixAvailability ? 'Yes' : 'No'}
                  </span>
                  <Form.Check
                    type='switch'
                    className={`custom-switch ${sixAvailability ? 'switch-yes' : 'switch-no'}`}
                    checked={sixAvailability}
                    onChange={onMutate}
                  />
                </div>
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default SixAvailability

import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TextInput from '../../../forms/inputs/TextInput'
import CheckboxInput from '../../../forms/inputs/CheckboxInput'
import BooleanInput from '../../../forms/inputs/BooleanInput'


const Accounting = ({ formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          eventKey="0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h5 style={{ marginLeft: '10px' }}>Accounting</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
          <BooleanInput
            label='Border Stations Included'
            id='exportStatus1'
            value={formData.exportStatus1}
            onChange={handleChange}
          />
          <BooleanInput
            label='Border Stations Included'
            id='exportStatus2'
            value={formData.exportStatus2}
            onChange={handleChange}
          />
          <BooleanInput
            label='Border Stations Included'
            id='exportStatus3'
            value={formData.exportStatus3}
            onChange={handleChange}
          />
          <h6>Web Products</h6>
          <TextInput
            label='Number of installments'
            id='numInstallments'
            value={formData.numInstallments}
            onChange={handleChange}
          />
          <TextInput
            label='Billing Start Date'
            id='billingStartDate'
            value={formData.billingStartDate}
            onChange={handleChange}
          />
          <TextInput
            label='Number of installments'
            id='numInstallments'
            value={formData.numInstallments}
            onChange={handleChange}
          />
          <TextInput
            label='Payment To Supplier'
            id='paymentToSupplier'
            value={formData.paymentToSupplier}
            onChange={handleChange}
          />
        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default Accounting


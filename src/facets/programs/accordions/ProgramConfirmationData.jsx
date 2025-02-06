import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import DateInput from '../../../forms/inputs/DateInput'
import BooleanInput from '../../../forms/inputs/BooleanInput'
import SelectInput from '../../../forms/inputs/SelectInput'
import TextAreaInput from '../../../forms/inputs/TextAreaInput'
import TextInput from '../../../forms/inputs/TextInput'

const ProgramConfirmationData = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)
    const [ formData, setFormData ] = useState({
      deliveryDate: '',
      releaseDate: '',
      contractStartDate: '',
      contractEndDate: '',
      contractExecuted: false,
      musicRecieved: false,
      licenseNum: '',
      guaranteedPrice: '',
      licenseFee: '',
      buyout: false,
      pricingStructure: ''
    })
  
    const handleChange = (e) => {
      const { id, value } = e.target
      setFormData({
        ...formData,
        [id]: value,
      })
    }

  return (
    <Accordion className='pcd'>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          eventKey="0"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h5 style={{ marginLeft: '10px' }}>Program Confirmation Data</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey="0">
        <Accordion.Body>
          <div class='pcd-dates'>
            <DateInput
              label='Delivery date'
              id='deliveryDate'
              value={formData.deliveryDate}
              onChange={handleChange}
            />
            <DateInput
              label='Release date'
              id='releaseDate'
              value={formData.releaseDate}
              onChange={handleChange}
            />
            <DateInput
              label='Contract start date'
              id='contractStartDate'
              value={formData.contractStartDate}
              onChange={handleChange}
            />
            <DateInput
              label='Contract end date'
              id='contractEndDate'
              value={formData.contractEndDate}
              onChange={handleChange}
            />
          </div>
          <h6 className='mt-2'>Delivery comments</h6>
          <div class='pcd-delivery-comments'>
            <BooleanInput
              label='Contract executed'
              id='contractExecuted'
              value={formData.contractExecuted}
              onChange={handleChange}
            />
            <BooleanInput
              label='Music cue sheet recieved'
              id='musicRecieved'
              value={formData.musicRecieved}
              onChange={handleChange}
            />
          </div>
          <div className='mt-3'>
            <TextInput
              label='Number of licenses at time of contract'
              id='licenseNum'
              value={formData.licenseNum}
              onChange={handleChange}
              className='single-row-form'
            />
            <TextInput
              label='Guaranteed price'
              id='guaranteedPrice'
              value={formData.guaranteedPrice}
              onChange={handleChange}
            />
            <TextInput
              label='License fee/ Accepted price at the time of contract'
              id='licenseFee'
              value={formData.licenseFee}
              onChange={handleChange}
            />
            <BooleanInput
              label='Buyout'
              id='buyout'
              value={formData.buyout}
              onChange={handleChange}
            />
            <TextInput
              label='Pricing structure'
              id='pricingStructure'
              value={formData.pricingStructure}
              onChange={handleChange}
            />
          </div>

        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default ProgramConfirmationData


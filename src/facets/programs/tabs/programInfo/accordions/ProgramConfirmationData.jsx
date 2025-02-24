import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import DateInput from '../../../../../forms/inputs/DateInput'
import BooleanInput from '../../../../../forms/inputs/BooleanInput'
import TextInput from '../../../../../forms/inputs/TextInput'
import SelectInput from '../../../../../forms/inputs/SelectInput'
import { options } from '../../../../../forms/formData/formOptions'

const ProgramConfirmationData = ({ formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false)

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
            <div className='pcd-dates'>
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
            <div className='pcd-delivery-comments'>
              <BooleanInput
                label='Contract executed'
                id='contractExecuted'
                value={formData.contractExecuted}
                onChange={handleChange}
              />
              <BooleanInput
                label='Music cue sheet received'
                id='musicRecieved'
                value={formData.musicRecieved}
                onChange={handleChange}
              />
            </div>
            <h6 className='mt-2'>Pricing information per program at the time of contract</h6>
            <div className='pcd-pricing-info-toc mt-3'>
              <TextInput
                label='Number of licenses at time of contract'
                id='licenseNum'
                value={formData.licenseNum}
                onChange={handleChange}
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
            <h6 className='mt-2'>Current pricing information per program</h6>
            <div className='pcd-current-pricing'>
              <TextInput
                label='Current number of licensees'
                id='numLicensees'
                value={formData.numLicensees}
                onChange={handleChange}
              />
              <TextInput
                label='Current license fee'
                id='currentLicenseFee'
                value={formData.currentLicenseFee}
                onChange={handleChange}
              />
            </div>
            <h6 className='mt-2'>Special Conditions</h6>
            <div className='pcd-special-conditions'>
              <SelectInput
                label='Add-ons'
                id='addOns'
                value={formData.addOns}
                onChange={handleChange}
                options={options.addOnOptions}
              />
              <TextInput
                label='Alerts'
                id='alerts'
                value={formData.alerts}
                onChange={handleChange}
              />
            </div>
            <h6 className='mt-2'>Micellaneous</h6>
            <div className='pcd-miscellaneous'>
              <BooleanInput
                label='Conversion costs borne by APT'
                id='conversionCosts'
                value={formData.conversionCosts}
                onChange={handleChange}
              />
              <SelectInput
                label='Supplier will provide broadcast tape(s) for'
                id='supplierProvided'
                value={formData.supplierProvided}
                onChange={handleChange}
                options={options.supplierProvidedOptions}
              />
              <TextInput
                label='If "Other Period", duration of period'
                id='durationPeriod'
                value={formData.durationPeriod}
                onChange={handleChange}
              />
              <h6 className='huh'>Is APT revenue sharing it's own object?</h6>
              <SelectInput
                label='National underwriter'
                id='nationalUnderwriter'
                value={formData.nationalUnderwriter}
                onChange={handleChange}
                options={options.nationalUnderwriterOptions}
              />
              <h6 className='huh'>What is the national underwriters table?</h6>
              <BooleanInput
                label='Local underwriting permitted'
                id='localUnderwriting'
                value={formData.localUnderwriting}
                onChange={handleChange}
              />
              <TextInput
                label='Local underwriting restrictions'
                id='localUnderwritingRestrictions'
                value={formData.localUnderwritingRestrictions}
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
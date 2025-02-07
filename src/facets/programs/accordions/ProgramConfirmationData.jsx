import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import DateInput from '../../../forms/inputs/DateInput'
import BooleanInput from '../../../forms/inputs/BooleanInput'
import TextInput from '../../../forms/inputs/TextInput'
import SelectInput from '../../../forms/inputs/SelectInput'

const ProgramConfirmationData = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
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
    pricingStructure: '',
    numLicensees: '',
    currentLicenseFee: '',
    addOns: '',
    alerts: '',
    conversionCosts: false,
    supplierProvided: '',
    durationPeriod: '',
    nationalUnderwriter: '',
    underwriters: '',
    localUnderwriting: false,
    localUnderwritingRestrictions: ''
  })

  const addOnOptions = [
    { value: 'Will Be Accepted', label: 'Will Be Accepted'},
    { value: 'Will Not Be Accepted', label: 'Will Not Be Accepted'},
    { value: 'Must Be Cleared', label: 'Must Be Cleared'}
  ]

  const supplierProvidedOptions = [
    { value: 'Dub & return', label: 'Dub & return'},
    { value: 'Duration of contract', label: 'Duration of contract'},
    { value: 'Other period', label: 'Other period'}
  ]

  const aptRevenueSharingOptions = [
    { value: 'Yes', label: 'Yes'},
    { value: 'No', label: 'No'},
    { value: 'Unknown', label: 'Unknown'}
  ]

  const nationalUnderwriterOptions = [
    { value: 'Yes', label: 'Yes'},
    { value: 'No', label: 'No'},
    { value: 'TBA', label: 'TBA'}
  ]

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
            <h6 class='mt-2'>Special Conditions</h6>
            <div class='pcd-special-conditions'>
              <SelectInput
                label='Add-ons'
                id='addOns'
                value={formData.addOns}
                onChange={handleChange}
                options={addOnOptions}
              />
              <TextInput
                label='Alerts'
                id='alerts'
                value={formData.alerts}
                onChange={handleChange}
              />
            </div>
            <h6 class='mt-2'>Micellaneous</h6>
            <div class='pcd-miscellaneous'>
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
                options={supplierProvidedOptions}
              />
              <TextInput
                label='If "Other Period", duration of period'
                id='durationPeriod'
                value={formData.durationPeriod}
                onChange={handleChange}
              />
              <h6 class='huh'>Is APT revenue sharing it's own object?</h6>
              <SelectInput
                label='National underwriter'
                id='nationalUnderwriter'
                value={formData.nationalUnderwriter}
                onChange={handleChange}
                options={nationalUnderwriterOptions}
              />
              <h6 class='huh'>What is the national underwriters table?</h6>
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
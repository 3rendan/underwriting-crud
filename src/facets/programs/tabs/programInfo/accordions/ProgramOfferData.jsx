import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TextInput from '../../../../../forms/inputs/TextInput'
import BooleanInput from '../../../../../forms/inputs/BooleanInput'
import SelectInput from '../../../../../forms/inputs/SelectInput'
import DateInput from '../../../../../forms/inputs/DateInput'
import { options } from '../../../../../forms/formData/formOptions'
import { Row } from 'react-bootstrap'

const ProgramOfferData = ({ formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  return (
    <Accordion className='pod'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header
          eventKey='0'
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h5 style={{ marginLeft: '10px' }}>Program Offer Data</h5>
        </Accordion.Header>
      <Accordion.Collapse eventKey='0'>
        <Accordion.Body className='pod-body'>
          <Row>
            <h6>Program Summary:</h6>
          </Row>
          <TextInput
            label='Program Service'
            id='programService'
            value={formData.programService}
            onChange={handleChange}
          />
          <TextInput
            label='Fund Category'
            id='fundCategory'
            value={formData.fundCategory}
            onChange={handleChange}
          />
          <TextInput
            label='Category'
            id='category'
            value={formData.category}
            onChange={handleChange}
          />
          <TextInput
            label='PTV Genre'
            id='ptvGenre'
            value={formData.ptvGenre}
            onChange={handleChange}
          />
          <TextInput
            label='Scheduling suggestions'
            id='schedulingSuggestions'
            value={formData.schedulingSuggestions}
            onChange={handleChange}
          />
          <TextInput
            label='National Base Price'
            id='nationalBasePrice'
            value={formData.nationalBasePrice}
            onChange={handleChange}
          />
          <h4 className='huh'>what is closed captioning fees and how is it calculated?</h4>
          <SelectInput
            label='Screening status'
            id='screeningStatus'
            value={formData.screeningStatus}
            onChange={handleChange}
            options={options.screeningStatusOptions}
          />
          <SelectInput
            label='Video'
            id='video'
            value={formData.video}
            onChange={handleChange}
            options={options.videoOptions}
          />
          <TextInput
            label='Offer Status'
            id='offerStatus'
            value={formData.offerStatus}
            onChange={handleChange}
          />
          <SelectInput
            label='Offered Via'
            id='offeredVia'
            value={formData.offeredVia}
            onChange={handleChange}
            options={options.offeredViaOptions}
          />
          <TextInput
            label='Page number in offer book'
            id='pageNumOfferBook'
            value={formData.pageNumOfferBook}
            onChange={handleChange}
          />
          <TextInput
            label='Rating'
            id='rating'
            value={formData.rating}
            onChange={handleChange}
          />
          <TextInput
            label='APT Contact'
            id='apsContact'
            value={formData.apsContact}
            onChange={handleChange}
          />
          <TextInput
            label='Screening tape in house'
            id='screeningTape'
            value={formData.screeningTape}
            onChange={handleChange}
          />
          <h4 className='huh'> What is season/ year? is it from a list?</h4>
          <BooleanInput
            label='Presentation'
            id='presentation'
            value={formData.presentation}
            onChange={handleChange}
          />
          <BooleanInput
            label='Vote submitted for Create programming'
            id='submittedCreateProgramming'
            value={formData.submittedCreateProgramming}
            onChange={handleChange}
          />
          <BooleanInput
            label='Vote submitted for World programming'
            id='submittedWorldProgramming'
            value={formData.submittedWorldProgramming}
            onChange={handleChange}
          />
          <BooleanInput
            label='Create premiere'
            id='createPremiere'
            value={formData.createPremiere}
            onChange={handleChange}
          />
          <BooleanInput
            label='Promo(s) expected:'
            id='promoExpected'
            value={formData.promoExpected}
            onChange={handleChange}
          />
          <TextInput
            label='Promo comments'
            id='promoComments'
            value={formData.promoComments}
            onChange={handleChange}
          />
          <TextInput
            label='Copyright holder'
            id='copyrightHolder'
            value={formData.copyrightHolder}
            onChange={handleChange}
          />
          <TextInput
            label='Copyright date'
            id='copyrightDate'
            value={formData.copyrightDate}
            onChange={handleChange}
          />
          <TextInput
            label='Number of episodes'
            id='numOfEpisodes'
            value={formData.numOfEpisodes}
            onChange={handleChange}
          />
          <TextInput
            label='Program Length'
            id='programLength'
            value={formData.programLength}
            onChange={handleChange}
          />
          <BooleanInput
            label='Contains filter'
            id='containsFilter'
            value={formData.containsFilter}
            onChange={handleChange}
          />
          <BooleanInput
            label='US Television Premiere'
            id='usPremiere'
            value={formData.usPremiere}
            onChange={handleChange}
          />
          <BooleanInput
            label='Content Advisory'
            id='contentAdvisory'
            value={formData.contentAdvisory}
            onChange={handleChange}
          />
          <h4 className='huh'>I don't know what kind of input is required for min/max filter length</h4>
          <h4 className='huh'> what is broadcast history?</h4>
          <h4 classNMame='huh'> What are rag details?</h4>
          <BooleanInput
            label='Station can edit flags'
            id='stationEditFlags'
            value={formData.stationEditFlags}
            onChange={handleChange}
          />
          <DateInput
            label='Flag updated date'
            id='flagUpdatedDate'
            value={formData.flagUpdatedDate}
            onChange={handleChange}
          />

        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default ProgramOfferData


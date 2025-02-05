import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TextInput from '../../../forms/inputs/TextInput'
import BooleanInput from '../../../forms/inputs/BooleanInput'
import SelectInput from '../../../forms/inputs/SelectInput'
import DateInput from '../../../forms/inputs/DateInput'

const ProgramOfferData = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ formData, setFormData ] = useState({
    programService: '',
    presentation: false,
    submittedCreateProgramming: false,
    submittedWorldProgramming: false,
    createPremiere: false,
    promoExpected: false,
    promoComment: '',
    fundCategory: '',
    screeningStatus: '',
    copyrightDate: '',
    copyrightHolder: '',
    numOfEpisodes: '',
    programLength: '',
    containsFilters: false,
    category: '',
    ptvGenre: '',
    schedulingSuggestions: '',
    nationalBasePrice: '',
    video: '',
    aptContact: '',
    offerStatus: '',
    screeningTape: '',
    descriptionRoutingStatus: '',
    seasonYear: '',
    offeredVia: '',
    pageNumOfferBook: '',
    rating: '',
    usTvPremiere: false,
    contentAdvisory: false,
    stationEditFlags: false,
    dateFlagUpdated: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const screeningStatusOptions = [
    { value: 'Screened', label: 'Screened' },
    { value: 'Not Screened', label: 'Not Screened'}
  ]

  const videoOptions = [
    { value: 'B&W', label: 'B&W'},
    { value: 'Color', label: 'Color'},
    { value: 'Mix', label: 'Mix'}
  ]

  const offeredViaOptions = [
    { value: 'Connect Forums', label: 'Connect Forums'},
    { value: 'Mail', label: 'Mail'},
    { value: 'Marketplace', label: 'Marketplace'},
    { value: 'Teleconference', label: 'Teleconference'}
  ]

  return (
    <Accordion className='program-details-accordion'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header
          eventKey='0'
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <h4 style={{ marginLeft: '10px' }}>Program Offer Data</h4>
        </Accordion.Header>
      <Accordion.Collapse eventKey='0'>
        <Accordion.Body>
          <h6>Program Summary:</h6>
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
          <p>what is closed captioning fees and how is it calculated?</p>
          <SelectInput
            label='Screening status'
            id='screeningStatus'
            value={formData.screeningStatus}
            onChange={handleChange}
            options={screeningStatusOptions}
          />
          <SelectInput
            label='Video'
            id='video'
            value={formData.video}
            onChange={handleChange}
            options={videoOptions}
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
            options={offeredViaOptions}
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
            id='aptContact'
            value={formData.aptContact}
            onChange={handleChange}
          />
          <TextInput
            label='Screening tape in house'
            id='screeningTape'
            value={formData.screeningTape}
            onChange={handleChange}
          />
          <p>What is season/ year? is it from a list?</p>
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
            id='usTvPremiere'
            value={formData.usTvPremiere}
            onChange={handleChange}
          />
          <BooleanInput
            label='Content Advisory'
            id='contentAdvisory'
            value={formData.contentAdvisory}
            onChange={handleChange}
          />
          <p>I don't know what kind of input is required for min/max filter length</p>
          <p>what is broadcast history?</p>
          <p>What are rag details?</p>
          <BooleanInput
            label='Station can edit flags'
            id='stationEditFlags'
            value={formData.stationEditFlags}
            onChange={handleChange}
          />
          <DateInput
            label='Flag updated date'
            id='dateFlagUpdated'
            value={formData.dateFlagUpdated}
            onChange={handleChange}
          />

        </Accordion.Body>
      </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  )
}

export default ProgramOfferData


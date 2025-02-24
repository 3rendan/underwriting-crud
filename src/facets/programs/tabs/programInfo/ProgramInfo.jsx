import React from 'react'
import MediaManager from './accordions/MediaManager'
import ProgramOfferData from './accordions/ProgramOfferData'
import SupplierContacts from './accordions/SupplierContacts'
import Voting from './accordions/Voting'
import ProgramConfirmationData from './accordions/ProgramConfirmationData'
import Communications from './accordions/Communications'
import DistributionServices from './accordions/DistributionServices'
import Accounting from './accordions/Accounting'

const ProgramInfo = ({program, formData, setFormData}) => {

  return (
    <div className='accordions'>
      <SupplierContacts program={program} formData={formData} setFormData={setFormData}/>
      <ProgramOfferData program={program} formData={formData} setFormData={setFormData}/>
      <MediaManager program={program} formData={formData} setFormData={setFormData}/>  
      <Voting program={program} formData={formData} setFormData={setFormData}/>
      <DistributionServices program={program} formData={formData} setFormData={setFormData}/>
      <ProgramConfirmationData program={program} formData={formData} setFormData={setFormData}/>
      <Communications program={program} formData={formData} setFormData={setFormData}/>
      <Accounting program={program} formData={formData} setFormData={setFormData}/>
    </div>
  )
}

export default ProgramInfo


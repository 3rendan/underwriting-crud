import React from 'react'
import MediaManager from '../accordions/MediaManager'
import ProgramOfferData from '../accordions/ProgramOfferData'
import SupplierContacts from '../accordions/SupplierContacts'
import Voting from '../accordions/Voting'
import ProgramConfirmationData from '../accordions/ProgramConfirmationData'
import Communications from '../accordions/Communications'
import DistributionServices from '../accordions/DistributionServices'
import Accounting from '../accordions/Accounting'

const ProgramInfo = ({program}) => {

  return (
    <div className='accordions'>
      {/* <SupplierContacts program={program} /> */}
      <ProgramOfferData program={program} />
      {/* <MediaManager program={program}/>  
      <Voting program={program} />
      <ProgramConfirmationData program={program} />
      <Communications program={program} />
      <DistributionServices program={program} />
      <Accounting program={program} />   */}
    </div>
  )
}

export default ProgramInfo

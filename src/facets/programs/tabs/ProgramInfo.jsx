import React from 'react'
import BroadcastRights from '../accordions/BroadcastRights'
import SixAvailability from '../accordions/SixAvailability'
import Licensees from '../accordions/Licensees'
import MediaManagerAvailability from '../accordions/MediaManagerAvailability'
import Summary from '../accordions/Summary'
import ContactInfo from '../accordions/ContactInfo'

const ProgramInfo = ({program}) => {
  return (
    <div className='accordions'>
      <BroadcastRights program={program}/>     
      <SixAvailability program={program}/>     
      <Licensees program={program}/>     
      <MediaManagerAvailability program={program}/>  
      <ContactInfo program={program} />
      <Summary program={program} />   
    </div>
  )
}

export default ProgramInfo

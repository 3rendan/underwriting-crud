import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const UnderwritingContext = createContext()

export const UnderwritingProvider = ({ children }) => {
  
  const getUnderwriters = async (id) => {
    console.log(id)
  }

  const getUnderwriter = async (unid) => {
    console.log(unid)
  }
  
  return (
    <UnderwritingContext.Provider value={{ 
      getUnderwriter, 
      getUnderwriters 
    }}>
      {children}
    </UnderwritingContext.Provider>
  )
}

export default UnderwritingContext

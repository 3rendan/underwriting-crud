import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from './AuthContext'

const UnderwritingContext = createContext()

export const UnderwritingProvider = ({ children }) => {

  const { token, isAuthenticated, getToken, validateToken } = useAuth()
  
  
  const getUnderwriters = async (id) => {
    try {
      if (!isAuthenticated || !validateToken()) {
        console.info('Token is invalid or expired, refreshing token')
        await getToken()
      }
      if (isAuthenticated && token) {
        const endpoint = process.env.REACT_APP_UNDERWRITING_ENDPOINT
        
      const res = await axios.get(endpoint.replace('{{IDNUMBER}}', id), {
        headers: { Authorization: `Bearer ${token}` },
      })

        return res.data
      } else {
        throw new Error('Failed to authenticate')
      }
    } catch (error) {
      console.error(`Error fetching underwriters data: ${error.message}`)
      throw error
    }
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

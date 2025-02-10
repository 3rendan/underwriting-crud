
import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from './AuthContext'

export const UnderwritingContext = createContext()
export const useUnderwriting = () => useContext(UnderwritingContext)


export const UnderwritingProvider = ({ children }) => {
  const { token, isAuthenticated, getToken, validateToken } = useAuth()

  const getUnderwriters = async (id) => {
    try {
      if (!isAuthenticated || !validateToken()) {
        console.info('Token is invalid or expired, refreshing token')
        await getToken()
      }
      if (isAuthenticated && token) {
        const endpoint = process.env.REACT_APP_QUERY_BY_ID_ENDPOINT
        const res = await axios.get(
          endpoint
            .replace('{{SCOPE}}', 'underwritingscope')
            .replace('{{VIEW}}', 'vUnderwritersGroupedByIDNumber')
            .replace('{{ID}}', id),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
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

  const editUnderwriter = (underwriter) => {
    console.log(underwriter)
  }
  

  const createUnderwriter = async (params) => {
    try {
      // Validate token and refresh if necessary
      if (!isAuthenticated || !validateToken()) {
        console.info('Token is invalid or expired, refreshing token')
        await getToken()
      }

      if (isAuthenticated && token) {
        // Prepare the request body
        const requestBody = {
          Title: params.Title,
          Underwriter: params.Underwriter,
          ProgramService: params.UWType,
          Amount: params.Amount,
          Notes: params.Notes,
          Form: 'Underwriting', // Always set to 'Underwriting',
          IDNumber: params.IDNumber
        }

        // Make the POST request
        const endpoint = process.env.REACT_APP_CREATE_ENDPOINT.replace(
          '{{SCOPE}}',
          'underwritingscope'
        )
        const res = await axios.post(endpoint, requestBody, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if(res.data['@meta'].unid) {
          const unidObj = {'agentName': 'UnderwritingPostSave', 'unids': [res.data['@meta'].unid] }
          const endpoint = 'http://restapi.aptonline.org:8880/api/v1/run/agentWithContext?dataSource=underwritingscope'
          const postSave = await axios.post(endpoint, unidObj, {
            headers: { Authorization: `Bearer ${token}` }
          })
          console.log('new object created')
        }
      } else {
        throw new Error('Failed to authenticate')
      }
    } catch (error) {
      console.error(`Error creating underwriter: ${error.message}`)
      throw error
    }
  }

  return (
    <UnderwritingContext.Provider
      value={{
        getUnderwriter,
        getUnderwriters,
        createUnderwriter,
        editUnderwriter
      }}
    >
      {children}
    </UnderwritingContext.Provider>
  )
}

export default UnderwritingContext
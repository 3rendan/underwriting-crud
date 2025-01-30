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
          UWType: params.UWType, // Always set to 'APT'
          Amount: params.Amount,
          Notes: params.Notes,
          Form: 'Underwriting', // Always set to 'Underwriting'
        }

        // Make the POST request
        const endpoint = process.env.REACT_APP_CREATE_ENDPOINT.replace(
          '{{SCOPE}}',
          'underwritingscope'
        )
        const res = await axios.post(endpoint, requestBody, {
          headers: { Authorization: `Bearer ${token}` },
        })

        // Return the response data
        return res.data
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
        createUnderwriter
      }}
    >
      {children}
    </UnderwritingContext.Provider>
  )
}

export default UnderwritingContext
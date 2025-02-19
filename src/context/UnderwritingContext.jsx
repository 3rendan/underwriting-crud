
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
  
  const getUnderwritingEpisodes = async (id) => {
    // Check authentication and refresh token if necessary
    if (!isAuthenticated || !validateToken()) {
      console.info('Token is invalid or expired, refreshing token')
      await getToken()
    }
  
    // Proceed only if authenticated and token is available
    if (isAuthenticated && token) {
      const endpoint = process.env.REACT_APP_UW_EPISODES_ENDPOINT
  
      try {
        // Make the API call
        const res = await axios.get(
          endpoint.replace('{{ID}}', id),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
  
        // Process the response data
        let result = []
  
        if (Array.isArray(res.data) && res.data.length > 0) {
          // Extract the value of the '2' key from each object and format it as { value, label }
          result = res.data.map((obj) => ({
            value: obj['2'],
            label: obj['2'],
          }))
  
          // Add 'Series' to the beginning of the array
          result.unshift({ value: 'Series', label: 'Series' })
        } else {
          // If res.data is empty or invalid, return 'Single Program'
          return 'Single Program'
        }
  
        // Return the processed array
        return result
      } catch (error) {
        console.error('Error fetching underwriting episodes:', error)
        throw new Error('Failed to fetch underwriting episodes')
      }
    } else {
      throw new Error('Failed to authenticate')
    }
  }
  
  const editUnderwriter = async (underwriter, unid) => {
    console.log(`UNID: ${unid}`)
    try {
      if (!isAuthenticated || !validateToken()) {
        console.info('Token is invalid or expired, refreshing token')
        await getToken()
      }
  
      if (isAuthenticated && token) {
        // Construct the endpoint URL
        const endpoint = process.env.REACT_APP_EDIT_ENDPOINT
          .replace('{{UNID}}', unid) // Replace {{UNID}} with the actual UNID
          .replace('{{SCOPE}}', 'underwritingscope')
          .replace('{{MODE}}', 'default')
        console.log(underwriter)
        
        // Prepare the request body
        const requestBody = {
          Underwriter: underwriter.Underwriter,
          Amount: underwriter.Amount,
          Notes: underwriter.Notes,
          Title: underwriter.Title, // Include Title
          IDNumber: underwriter.IDNumber, // Include IDNumber
          Episode: underwriter.Episodes,
          Form: 'Underwriting',
          DurationSeconds: underwriter.DurationSeconds
      }
  
        // Configure the axios request
        const config = {
          method: 'put', // Use PUT method
          url: endpoint,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(requestBody), // Stringify the request body
        }
  
        // Make the PUT request
        const res = await axios(config)
  
        console.log('Underwriter updated successfully:', res.data)
        return res.data
      } else {
        throw new Error('Failed to authenticate')
      }
    } catch (error) {
      console.error(`Error updating underwriter: ${error.message}`)
      throw error
    }
  }
  
  const createUnderwriter = async (params) => {
    try {
      // Validate token and refresh if necessary
      if (!isAuthenticated || !validateToken()) {
        console.info('Token is invalid or expired, refreshing token')
        await getToken()
      }
  
      if (isAuthenticated && token) {
        console.log(params)

        // Prepare the request body
        const requestBody = {
          Title: params.Title,
          Underwriter: params.Underwriter,
          ProgramService: 'APT',
          Amount: params.Amount,
          Notes: params.Notes,
          Form: 'Underwriting', // Always set to 'Underwriting'
          IDNumber: params.IDNumber,
          Episode: params.Episode,
          DurationSeconds: params.DurationSeconds
        }
  
        // Make the POST request
        const endpoint = process.env.REACT_APP_CREATE_ENDPOINT.replace(
          '{{SCOPE}}',
          'underwritingscope'
        )
        const res = await axios.post(endpoint, requestBody, {
          headers: { Authorization: `Bearer ${token}` }
        })
  
        // Return the response for further handling
        return res
      } else {
        throw new Error('Failed to authenticate')
      }
    } catch (error) {
      console.error(`Error creating underwriter: ${error.message}`)
      throw error
    }
  }

  const deleteUnderwriter = async (unid) => {
    try {
      if (!isAuthenticated || !validateToken()) {
        console.info('Token is invalid or expired, refreshing token')
        await getToken()
      }
  
      if (isAuthenticated && token) {
        // Construct the endpoint URL
        const endpoint = process.env.REACT_APP_DELETE_ENDPOINT
          .replace('{{UNID}}', unid) // Replace {{UNID}} with the actual UNID
          .replace('{{SCOPE}}', 'underwritingscope')
          .replace('{{MODE}}', 'delete')
  
        // Make the DELETE request
        const res = await axios.delete(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
        })
  
        console.log('Underwriter deleted successfully:', res.data)
        return res.data
      } else {
        throw new Error('Failed to authenticate')
      }
    } catch (error) {
      console.error(`Error deleting underwriter: ${error.message}`)
      throw error
    }
  }
  

  return (
    <UnderwritingContext.Provider
      value={{
        getUnderwriters,
        getUnderwritingEpisodes,
        createUnderwriter,
        editUnderwriter,
        deleteUnderwriter
      }}
    >
      {children}
    </UnderwritingContext.Provider>
  )
}

export default UnderwritingContext
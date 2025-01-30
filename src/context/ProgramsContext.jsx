import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { programsStatic } from '../assets/static/programData'
import { useAuth } from './AuthContext'

const ProgramsContext = createContext()

export const ProgramsProvider = ({ children }) => {
  const [programs, setPrograms] = useState([])
  const [filters, setFilters] = useState({
    expiringSoon: false,
    exchange: false,
    syndication: false,
  })
  const { token, isAuthenticated, getToken, validateToken } = useAuth()

  useEffect(() => {
    setPrograms(programsStatic)
  }, []) // Load static programs data initially

  const getProgram = async (id) => {
    try {
      if (!isAuthenticated || !validateToken()) {
        console.info('Token is invalid or expired, refreshing token')
        await getToken()
      }
      const endpoint = process.env.REACT_APP_QUERY_BY_UNID_ENDPOINT

      if (isAuthenticated && token) {
        const res = await axios.get(
          endpoint.replace('{{SCOPE}}', 'programsscope').replace('{{UNID}}', id),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        return res.data
      } else {
        throw new Error('Failed to authenticate')
      }
    } catch (error) {
      console.error(`Error fetching program data: ${error.message}`)
      throw error
    }
  }

  const applyFilters = () => {
    const today = new Date()
    return programs.filter((program) => {
      if (filters.expiringSoon) {
        const endDate = new Date(program.ContractEndDate)
        if (isNaN(endDate) || (endDate - today) / (1000 * 60 * 60 * 24) >= 90) {
          return false
        }
      }
      if (filters.exchange && program.ProgramService !== 'Exchange') {
        return false
      }
      if (filters.syndication && program.ProgramService !== 'Syndication') {
        return false
      }
      return true
    })
  }

  return (
    <ProgramsContext.Provider
      value={{ programs: applyFilters(), filters, setFilters, getProgram }}
    >
      {children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsContext

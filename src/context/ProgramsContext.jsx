import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useAuth } from './AuthContext'
import { programsStatic } from '../assets/static/programData'

const ProgramsContext = createContext()

export const ProgramsProvider = ({ children }) => {
  const [programs, setPrograms] = useState([])
  const { token, isAuthenticated, getToken, validateToken } = useAuth()

  useEffect(() => {
    setPrograms(programsStatic)
  }, []) // Re-fetch when offset or token changes

  return (
    <ProgramsContext.Provider value={{ programs }}>
      {children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsContext

import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const ProgramsContext = createContext()

export const ProgramsContextProvider = ({ children }) => {
  const [programs, setPrograms] = useState([])

  // useEffect(() => {
  //   getPrograms()
  // }, [])
  
  // const getPrograms = async() => {
  //   try {
  //     const endpoint = process.env.REACT_APP_PROGRAMS_ENDPOINT
  //     const res = axios.get(endpoint)
  //     setPrograms(res.data)
  //   } catch (error) {
  //     console.error(`Failed to fetch programs: ${error.message}`)
  //   }
  // }
  

  return (
    <ProgramsContext.Provider value={{
      programs
    }}>
      {children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsContext

import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useAuth } from './AuthContext'

const ProgramsContext = createContext()

export const ProgramsProvider = ({ children }) => {
  const [programs, setPrograms] = useState([])
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const { token, isAuthenticated, getToken, validateToken } = useAuth()
  const programsEndpoint = process.env.REACT_APP_PROGRAMS_ENDPOINT
  const PAGE_SIZE = 20

  const fetchPrograms = async (currentOffset) => {
    if (!isAuthenticated || !validateToken()) {
      console.info('Token invalid or expired, refreshing token')
      await getToken()
    }
    try {
      const res = await axios.get(
        `http://restapi.aptonline.org:8880/api/v1/lists/vRESTProgramsOnlyByTitle?dataSource=programsscope&count=${PAGE_SIZE}&documents=true&offset=${currentOffset}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (res.data.length < PAGE_SIZE) {
        setHasMore(false) // No more data to fetch
      }
      setPrograms((prev) => [...prev, ...res.data])
      console.info(`Programs fetched successfully: ${res.data.length} records`)
    } catch (error) {
      console.info(`Error fetching programs: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchPrograms(offset)
  }, [offset, token, isAuthenticated]) // Re-fetch when offset or token changes

  const loadMorePrograms = () => {
    if (hasMore) {
      setOffset((prevOffset) => prevOffset + PAGE_SIZE)
    }
  }

  return (
    <ProgramsContext.Provider value={{ programs, loadMorePrograms, hasMore }}>
      {children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsContext

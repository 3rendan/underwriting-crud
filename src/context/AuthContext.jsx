import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(null)

  const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT

  const getToken = async (params) => {
    try {
      const response = await axios.post('http://restapi.aptonline.org:8880/api/v1/auth', {
        username: 'Administrator',
        password: 'OffDomino#2025',
      })

      const bearerToken = response.data?.bearer

      if (bearerToken) {
        setToken(bearerToken)
        setIsAuthenticated(true)
      } else {
        throw new Error('No bearer token received')
      }
    } catch (error) {
      console.error(`Error during token retrieval: ${error.message}`)
      setToken(null)
      setIsAuthenticated(false)
    }
  }

  const validateToken = () => {
    if (!token) return false

    try {
      const decoded = jwtDecode(token) // Decode the token
      const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds

      if (decoded.exp && currentTime >= decoded.exp) {
        console.info('Token has expired')
        setToken(null)
        setIsAuthenticated(false)
        return false
      }

      return true
    } catch (error) {
      console.error(`Error validating token: ${error.message}`)
      setToken(null)
      setIsAuthenticated(false)
      return false
    }
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, getToken, validateToken }}>
      {children}
    </AuthContext.Provider>
  )
}

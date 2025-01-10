import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const Dashboard = () => {
  const { isAuthenticated, token } = useAuth()

  useEffect(() => {
    console.info(`Token: ${token}`)
  }, [token])

  return (
    <div  className='text-center'>
      {isAuthenticated ? (
        <p className='gtg'>Authenticated! Token is ready for use.</p>
      ) : (
        <p className='waiting'>Authenticating...</p>
      )}
    </div>
  )
}

export default Dashboard

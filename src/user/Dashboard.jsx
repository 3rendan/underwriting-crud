import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import Col from 'react-bootstrap/Col'
import Breadcrumbs from '../layout/navigation/Breadcrumbs'

const Dashboard = () => {
  const { isAuthenticated, token } = useAuth()

  return (
    <>
    <div  className='text-center'>
      {isAuthenticated ? (
        <Col
          lg={12}
          className='dashboard-square position-absolute'
          style={{
            top: '0',
            right: '0',
            height: '2rem',
            width: '2rem',
            backgroundColor: 'green',
          }}
        />
      ) : (
        <Col
          lg={12}
          className='dashboard-square position-absolute'
          style={{
            top: '0',
            right: '0',
            height: '2rem',
            width: '2rem',
            backgroundColor: 'red',
          }}
        />
      )}
    </div>
    <Breadcrumbs />
    </>
  )
}

export default Dashboard

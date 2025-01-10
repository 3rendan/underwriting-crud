import React from 'react'
import Dashboard from '../../user/Dashboard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumbs from '../navigation/Breadcrumbs'

const Header = () => {
  return (
    <header>
      <Row className='align-items-center justify-content-center'>
        <Col xs={12} className='text-center'>
          <h1 className='my-3'>the underwriter</h1>
        </Col>
        <Col
          xs={1}
          className='dashboard-square position-absolute'
          style={{
            top: '0',
            right: '0',
            height: '2rem',
            width: '2rem',
          }}
        >
          <Dashboard />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col md={{
          span: 2, offset: 10
        }}>
          <Breadcrumbs />
        </Col>
      </Row>
    </header>
  )
}

export default Header

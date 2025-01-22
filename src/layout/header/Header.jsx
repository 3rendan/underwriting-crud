import React from 'react'
import Dashboard from '../../user/Dashboard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumbs from '../navigation/Breadcrumbs'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'

const Header = () => {
  return (
    <header>
      <Row className='align-items-center justify-content-center'>
        <Col xs={12}>
          <Logo style={{ height: '50px', width: 'auto' }}/>
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
      <Row>
        <Col>
          <Breadcrumbs />
        </Col>
      </Row>
    </header>
  )
}

export default Header

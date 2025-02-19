import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/Header'

const RootLayout = () => {

  return (
    <div className='root-layout'>
      <a href='#main-content' className='skip-link'>Skip to main content</a>
      <div>
        <Header />
      </div>
      <main id='main-content' tabIndex='-1'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout


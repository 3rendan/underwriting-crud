import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../layout/header/Header'

const RootLayout = () => {

  return (
    <div className='root-layout'>
      <a href='#main-content' className='skip-link'>Skip to main content</a>
      <div className='gradient-wrapper'>
        <Header />
      </div>
      <main id='main-content' tabIndex='-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout


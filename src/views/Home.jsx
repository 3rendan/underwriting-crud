import React from 'react'
import Read from '../facets/programs/Read'
import Container from 'react-bootstrap/Container'
import FilterRow from '../catalog/FilterRow'

const Home = () => {
  return (
    <>
      <FilterRow />
      <Container className='d-flex'>
        <Read />
      </Container>
    </>
  )
}

export default Home

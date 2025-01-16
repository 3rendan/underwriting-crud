import React from 'react'
import ProgramsList from '../facets/programs/ProgramsList'
import Container from 'react-bootstrap/Container'
import FilterRow from '../catalog/FilterRow'

const Home = () => {
  return (
    <>
      <FilterRow />
      <Container className='d-flex'>
        <ProgramsList />
      </Container>
    </>
  )
}

export default Home

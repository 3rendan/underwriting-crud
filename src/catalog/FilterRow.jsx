import React, { useContext } from 'react'
import ProgramsContext from '../context/ProgramsContext'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const FilterRow = () => {
  const { filters, setFilters } = useContext(ProgramsContext)

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }))
  }

  return (
    <Container>
      <h2 className='text-center mt-3 mb-3'>Filters</h2>
      <Col xs={{ span: 9, offset: 2}} className=' mt-3 filters'>
        <label>
          <input
            type='checkbox'
            checked={filters.expiringSoon}
            onChange={() => handleFilterChange('expiringSoon')}
          />
          Expiring Soon
        </label>
        <label>
          <input
            type='checkbox'
            checked={filters.exchange}
            onChange={() => handleFilterChange('exchange')}
          />
          Exchange
        </label>
        <label>
          <input
            type='checkbox'
            checked={filters.syndication}
            onChange={() => handleFilterChange('syndication')}
          />
          Syndication
        </label>
      </Col>
      <h2 className='huh'>What info on programs do you want to filter on?</h2>
    </Container>
  )
}

export default FilterRow

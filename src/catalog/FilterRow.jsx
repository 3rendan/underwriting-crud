import React, { useContext } from 'react'
import ProgramsContext from '../context/ProgramsContext'

const FilterRow = () => {
  const { filters, setFilters } = useContext(ProgramsContext)

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }))
  }

  return (
    <div className='filter-row'>
      <h4 className='text-center'>Filter</h4>
      <div className='filters'>
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
      </div>
    </div>
  )
}

export default FilterRow

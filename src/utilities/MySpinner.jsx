import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const MySpinner = ({error}) => {
  return (
    <div className='my-spinner d-flex justify-content-center mt-5 mb-5' data-testid='my-spinner'>
      <Button className='btn-spinner' disabled>
          <Spinner
            className='text-center'
            animation='grow'
            size='sm'
            aria-hidden='true'
          />
          { error ? <p>{error}</p> : <p>Loading...</p> }
      </Button>
    </div>
  )
}
export default MySpinner

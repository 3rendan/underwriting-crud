import React, { useEffect, useContext, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ProgramsContext from '../../context/ProgramsContext'

const Breadcrumbs = () => {
  const location = useLocation()
  const params = useParams()
  const id = params.id
  const { getProgram } = useContext(ProgramsContext)
  const [program, setProgram] = useState(null)

  useEffect(() => {
    if (id) {
      const fetchProgram = async () => {
        try {
          const programData = await getProgram(id)
          setProgram(programData)
        } catch (error) {
          console.error('Failed to fetch program:', error)
        }
      }
      fetchProgram()
    } else {
      setProgram(null) // Reset program when navigating away
    }
  }, [id, getProgram])

  return (
    <Breadcrumb>
      {/* "Program" breadcrumb always links to the homepage */}
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
        Programs
      </Breadcrumb.Item>

      {/* Only show the program title when on a program-specific page */}
      {program && (
        <Breadcrumb.Item active>
          {program.Title}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}

export default Breadcrumbs

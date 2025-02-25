import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from '../src/router/router'
import { ProgramsProvider } from '../src/context/ProgramsContext'
import { AuthProvider } from '../src/context/AuthContext'
import { UnderwritingProvider } from '../src/context/UnderwritingContext'

function App() {
  return (
    <AuthProvider>
      <UnderwritingProvider>
        <ProgramsProvider>
          <RouterProvider router={Router} />
        </ProgramsProvider>
      </UnderwritingProvider>
    </AuthProvider>
  )
}

export default App

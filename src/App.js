import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './router/router'
import { ProgramsProvider } from './context/ProgramsContext'
import { AuthProvider } from './context/AuthContext'
import { UnderwritingProvider } from './context/UnderwritingContext'

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

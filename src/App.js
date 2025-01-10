import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './router/router'
import { ProgramsProvider } from './context/ProgramsContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <ProgramsProvider>
        <RouterProvider router={Router} />
      </ProgramsProvider>
    </AuthProvider>
  );
}

export default App

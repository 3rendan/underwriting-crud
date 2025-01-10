import React from 'react'
import { ProgramsProvider } from './context/ProgramsContext'
import { AuthProvider } from './context/AuthContext'
import Read from './crud/Read'
import Dashboard from './crud/Dashboard'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <AuthProvider>
      <ProgramsProvider>
        <div className="App">
          <header>
            <h1 className='text-center mb-5 mt-5'>the underwriter</h1>
          </header>
          <Container>
            <Dashboard/>
            <Read/>
          </Container>
        </div>
      </ProgramsProvider>
    </AuthProvider>
  );
}

export default App

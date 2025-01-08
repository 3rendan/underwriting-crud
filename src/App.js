import React from 'react'
import { ProgramsContextProvider } from './context/ProgramsContext'
import Read from './crud/Read';


function App() {
  return (
    <ProgramsContextProvider>
      <div className="App">
        <header>
          <h1 className='text-center mb-5 mt-5'>the underwriter</h1>
          <Read/>
        </header>
      </div>
    </ProgramsContextProvider>
  );
}

export default App

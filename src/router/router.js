import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom' 
import Read from '../facets/programs/Read'
import RootLayout from './RootLayout'
import ErrorPage from './ErrorPage'
import ProgramRead from '../facets/programs/ProgramRead'

const Router = createBrowserRouter([ 
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Read />,
      },
      {
        path: '/read/program/id',
        element: <ProgramRead />
      }  
    ]
  } 
])
export default Router
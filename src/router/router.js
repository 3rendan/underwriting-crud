import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom' 
import Home from '../views/Home'
import RootLayout from './RootLayout'
import ErrorPage from './ErrorPage'
import ProgramPage from '../facets/programs/ProgramPage'

const Router = createBrowserRouter([ 
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/program/:id',
        element: <ProgramPage />
      }  
    ]
  } 
])
export default Router
import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom' 
import Home from '../views/Home'
import RootLayout from './RootLayout'
import ErrorPage from './ErrorPage'
import ProgramDetails from '../facets/programs/ProgramDetails'

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
        element: <ProgramDetails />
      }  
    ]
  } 
])
export default Router
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
import Database from './components/Database.jsx'
import Home from './components/Home.jsx'
import Updates from './components/Updates.jsx'
import Donation from './components/Donation.jsx'

const router = createBrowserRouter([
  {
    path: '/montserrat-app/',
    element: <App />,
    children: [
      {
        path: 'database',
        element: <Database/>
      },
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'updates',
        element: <Updates/>
      },
      {
        path: 'donation',
        element: <Donation/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

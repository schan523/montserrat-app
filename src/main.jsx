import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
import Database from './components/Database.jsx'

const router = createBrowserRouter([
  {
    path: '/montserrat-app/',
    element: <App />,
    children: [
      {
        path: 'database',
        element: <Database/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

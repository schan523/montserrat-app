import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
<<<<<<< HEAD
import Database from "./components/Database.jsx";
import Home from "./components/home/Home.jsx";
import Updates from "./components/Updates.jsx";
import Donation from "./components/Donation.jsx";

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
=======
>>>>>>> 4059029d5a9ac3bf64f480f7397e1c8f4afc7d71

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </StrictMode>,
)

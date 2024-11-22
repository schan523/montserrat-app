import { useState } from 'react'
import './styles/App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Donation from './components/Donation.jsx'
import { Outlet } from 'react-router'

export default function App() {
  const [count, setCount] = useState(0)

  function renderPage() {
    
  }

  return (
    <>
      <Navbar />
      <Home />
      <Donation />
      <Outlet />
    </>
  )
}


import { useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Database from './components/Database.jsx'
import Donation from './components/Donation.jsx'
import Updates from './components/Updates.jsx'


export default function App() {
  const [count, setCount] = useState(0)

  function renderPage() {
    
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/database" element={<Database/>}/>
        <Route path="/donation" element={<Donation/>}/>
        <Route path="/updates" element={<Updates/>}/>
      </Routes>
    </>
  )
}


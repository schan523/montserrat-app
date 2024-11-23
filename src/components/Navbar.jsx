import React from 'react'
import { Link } from 'react-router-dom'
import '../App.jsx'
import './../styles/Navbar.module.css'

export default function Navbar() {
    return (
    <nav className="App">
        <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="database">Database</Link></li>
            <li><Link to="updates">Updates</Link></li>
            <li><Link to="donation">Donation</Link></li>
        </ul>
    </nav>
);
}
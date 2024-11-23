import React from 'react'
import { Link } from 'react-router-dom'
import '../App.jsx'
import css from './../styles/Navbar.module.css'

export default function Navbar() {
    return (
    <nav className={css.nav}>
        <ul className={css.ul}>
            <li className={css.navItem}><Link to="">Home</Link></li>
            <li className={css.navItem}><Link to="database">Database</Link></li>
            <li className={css.navItem}><Link to="updates">Updates</Link></li>
            <li className={css.navItem}><Link to="donation">Donation</Link></li>
        </ul>
    </nav>
);
}
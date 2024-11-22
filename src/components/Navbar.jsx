import React from 'react'
import css from './../styles/Navbar.module.css'

export default function Navbar() {
    return (
    <nav>
        <div className={css.navItem}>
            <a href="./">Home</a>
        </div>
        <div className={css.navItem}>
            <a href="./database">Database</a>
        </div>
        <div className={css.navItem}>
            <a href="./updates">Updates</a>
        </div>
        <div className={css.navItem}>
            <a href="./donation">Donations</a>
        </div>
    </nav>
);
}
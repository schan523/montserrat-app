import React, { useEffect, useState } from 'react'
import css from '../styles/Database.module.css'

export default function Database() {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('profiles.json')
        .then((response) => {response.json()})
        .then((data) => setData(data))
    });
    
    return (
    <div className={css.container}>
        <h2>Database</h2>
        <input type="search" placeholder="Search"/>
        <div className={css.databaseContainer}>

        </div>
    </div>
    
);
}
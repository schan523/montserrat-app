import React from 'react'
import css from '../styles/Database.module.css'

export default function Database() {
    // let data;
    
    // fetch("profiles.json")
    // .then((response) => {
    //     return response.json();
    // })
    // .then(d => {
    //     console.log(d);
    // })

    // console.log(data);
    
    return (
    <div className={css.container}>
        <h2>Database</h2>
        <button>Upload JSON</button>
        <br/>
        <input type="search" placeholder="Search"/>
        <div className={css.databaseContainer}>

        </div>
    </div>
    
);
}
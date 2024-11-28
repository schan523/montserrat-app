import React, { useEffect, useState } from "react";
import css from "../styles/Database.module.css";
import data from './profiles.json';

export default function Database() {
  return (
    <div className={css.container}>
      <h2>Database</h2>
      <input className={css.search} type="search" placeholder="Search" />
      <div className={css.databaseContainer}>
        <div className={css.filterContainer}>
          <p>Filter by:</p>
          <input type="checkbox" id="recent" />
          <span>Recent</span> <br />
          <input type="checkbox" id="amt" />
          <span>Amount</span> <br />
          <input type="checkbox" id="alphabetical" />
          <span>Alphabetical</span>
        </div>
        <div className={css.statsContainer}>
          <h4>Stats</h4>
          <p>Average Donation Amount: </p>
          <p>Average Donations: </p>
        </div>
        <div className={css.databaseEntries}>
            <h2>Entries</h2>
            <ul> 
                {data.profiles.map((profile) => {return <li key={profile.BCID}>Name: {profile.firstName} {profile.lastName}</li>})}
            </ul>
        </div>
      </div>
    </div>
  );
}

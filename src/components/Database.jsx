import React, { useState } from "react";
import css from "../styles/Database.module.css";
import data from './profiles.json';

export default function Database() {
  const entryLength = data.profiles.length;
  const [isHidden, setIsHidden] = useState(Array(entryLength).fill(false));

  let averageAmt = 0;
  let leng = 0;
  data.profiles.forEach((profile) => {profile.donations.map((donation) => {averageAmt += parseFloat(donation.amount); leng++})})
  averageAmt = (averageAmt / leng).toFixed(2);

  function changeEntry(ind) {
    const newArr = [...isHidden]
    newArr[ind] = !newArr[ind];
    setIsHidden(newArr);
  }

  return (
    <div>
      <h2>Database</h2>
      <input className={css.search} type="search" placeholder="Search" />
      <div className={css.container}>
        <div className={css.leftContainer}>
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
            <p>Average Donation Amount: ${averageAmt}</p>
            <p>Average Donations: {leng / data.profiles.length}</p>
          </div>
        </div>
        <div className={css.databaseEntries}>
          <h2>Entries</h2>
          {data.profiles.map((profile, ind) => {
            return <div key={profile.BCID}>
              <button type="button" className={css.collapsible} onClick={() => changeEntry(ind)}>
                Name: {profile.firstName} {profile.lastName} &nbsp; {profile.donations.length}
              </button>
              {isHidden[ind] && (
                <div className={css.hiddenContent}>
                  {profile.donations.map((donation) => {return <p>Date: {donation.time} &nbsp; Amount: {donation.amount}</p>})}
                </div>)}
            </div>})}
        </div>
      </div>
    </div>
  );
}

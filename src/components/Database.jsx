import React, { useState } from "react";
import css from "../styles/Database.module.css";
import data from './profiles.json';

export default function Database() {
  const entryLength = data.profiles.length;
  const [isHidden, setIsHidden] = useState(Array(entryLength).fill(false));
  const [filtered, setFiltered] = useState(data.profiles);

  let averageAmt = 0;
  let leng = 0;
  data.profiles.forEach((profile) => {profile.donations.map((donation) => {averageAmt += parseFloat(donation.amount); leng++})})
  averageAmt = (averageAmt / leng).toFixed(2);

  function changeEntry(ind) {
    const newArr = [...isHidden]
    newArr[ind] = !newArr[ind];
    setIsHidden(newArr);
  }

  const search = (e) => {
    const filteredItems = data.profiles.filter((profile) => 
      profile.firstName.includes(e.target.value) || profile.lastName.includes(e.target.value));
    setFiltered(filteredItems);
  }

  const sortAmt = () => {
    const list = [...filtered];
    const byAmt = list.sort((a, b) => b.donationTotal - a.donationTotal);
    setFiltered(byAmt);
  }
  
  // helper functions
  function compare(a, b) {
    if (a.slice(-2) < b.slice(-2)) {
      return -1;
    } else if (a.slice(-2) > b.slice(-2)) {
      return 1;
    } else {
      if (a.slice(0, 2) < b.slice(0, 2)) {
        return -1;
      } else if (a.slice(0, 2) > b.slice(0, 2)) {
        return 1;
      } else {
          return -1 ? (a.slice(3, 4) < b.slice(3, 4)) : 1 ? (a.slice(3, 4) > b.slice(3, 4)) : 0;
        }
    }
  }

  function mostRecent(donations) {
    let result = donations[0].time;
    for (let donation of donations) {
      if (compare(result, donation.time) == -1) {
        result = donation.time;
      }
    }
    return result;
  }

  const sortRecent = () => {
    const list = [...filtered];
    const byRecent = list.sort((a, b) => compare(mostRecent(a.donations), mostRecent(b.donations))).reverse();
    setFiltered(byRecent);
  }

  const sortA = () => {
    const list = [...filtered];
    const alphabetical = list.sort((a, b) => {
      return (a.lastName < b.lastName) ? -1 : (a.lastName > b.lastName) ? 1 : 0;
    });
    setFiltered(alphabetical);
  }

  console.log(data.profiles[0].donations[0].time[2]);

  return (
    <div>
      <h2>Database</h2>
      <input className={css.search} type="search" onChange={search} placeholder="Search" />
      <div className={css.container}>
        <div className={css.leftContainer}>
          <div className={css.filterContainer}>
            <p>Filter by:</p>
            <input type="checkbox" id="recent" onChange={sortRecent}/>
            <span>Recent</span> <br />
            <input type="checkbox" id="amt" onChange={sortAmt} />
            <span>Amount</span> <br />
            <input type="checkbox" id="alphabetical" onChange={sortA}/>
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
          {filtered.map((profile, ind) => {
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

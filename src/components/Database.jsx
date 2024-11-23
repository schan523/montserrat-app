import React, { useEffect, useState } from "react";
import css from "../styles/Database.module.css";

export default function Database() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //     fetch('profiles.json')
  //     .then((response) => {response.json()})
  //     .then((data) => setData(data))
  // });

  let data = `{
    "users": [{
      "firstName": "Night",
      "lastName": "Wing",
      "BCID": "763190304",
      "email": "Nightwing@Gotham.com",
      "Donation": "1000"
    },
    {
      "firstName": "Bat",
      "lastName": "Man",
      "BCID": "1234056",
      "email": "12342@bc.edu",
      "Donation": "9304"
    },
    {
      "firstName": "Sunny",
      "lastName": "My Guy",
      "BCID": "76312304",
      "email": "makemefree@bc.edu",
      "Donation": "100"
    },
    {
      "firstName": "Jim",
      "lastName": "Larry",
      "BCID": "12310654",
      "email": "makemefree@bc.edu",
      "Donation": ".00000001"
    },
    {
      "firstName": "Mary",
      "lastName": "Jackson",
      "BCID": "2342435",
      "email": "JacksonM@bc.edu",
      "Donation": ".00000001"
    }
  ]
}`;

data = JSON.parse(data);
console.log(data);

  return (
    <div className={css.container}>
      <h2>Database</h2>
      <input className={css.search} type="search" placeholder="Search" />
      <div className={css.databaseContainer}>
        <div className={css.filterContainer}>
          <p>Filter by:</p>
          <input type="checkbox" id="recent" />
          <label for="recent">Recent</label> <br />
          <input type="checkbox" id="amt" />
          <label for="amt">Amount</label> <br />
          <input type="checkbox" id="alphabetical" />
          <label for="alphabetical">Alphabetical</label>
        </div>
        <div className={css.statsContainer}>
          <h4>Stats</h4>
          <p>Average Donation Amount: </p>
          <p>Average Donations: </p>
        </div>
        <div className={css.databaseEntries}>
            <h2>Entries</h2>
            <ul>
                <li>Name: {data.users[0].firstName}{data.users[0].lastName}</li>
                <li>Name: {data.users[1].firstName}{data.users[1].lastName}</li>
                <li>Name: {data.users[2].firstName}{data.users[2].lastName}</li>
                <li>Name: {data.users[3].firstName}{data.users[3].lastName}</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

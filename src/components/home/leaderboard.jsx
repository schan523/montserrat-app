import React from 'react';

export function Leaderboard({ data }) {
    const users = Object.values(data.profiles);
  
    users.sort((a, b) => parseFloat(b.Donation) - parseFloat(a.Donation));
  
    return (
      <div id="leaderboard">
        <h2>Leaderboard</h2>
        <img
          id="Montserat"
          src="https://cdn.glitch.global/03e7f1b3-0491-4fc8-9305-999335b1ea76/1688570149450.jpg?v=1732321405829"
          alt="Top Donor"
        />
        <ol>
          {users.map((user, index) => (
            <li key={index}>
              <a href="#">
                <span>
                  {user["First-Name"]} {user["Last-Name"]}
                </span>
                <span>${parseFloat(user.Donation).toFixed(2)}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    );
  }
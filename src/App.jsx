// App.jsx
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Home from "./components/home/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Donation from "./components/Donation.jsx";
import { Outlet } from 'react-router';
import { Leaderboard } from "./components/home/leaderboard.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ profiles: {} });

  useEffect(() => {
    fetch('\data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Donation />
      <div className="App">
        <h1>Welcome to the App</h1>
        <Leaderboard data={data} />
      </div>
      <Outlet />
    </>
  );
}
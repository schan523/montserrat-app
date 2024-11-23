import React, { useState } from "react";

function DonationTracker() {
  const [donors, setDonors] = useState([
    { name: "John Doe", amount: 50, date: "2024-11-20" },
    { name: "Jane Smith", amount: 100, date: "2024-11-21" },
  ]);
  const [goal, setGoal] = useState(1000);
  const [currentTotal, setCurrentTotal] = useState(150);

  const handleDonation = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newDonor = {
      name: formData.get("name"),
      amount: parseFloat(formData.get("amount")),
      date: new Date().toISOString().split("T")[0],
    };
    setDonors([...donors, newDonor]);
    setCurrentTotal(currentTotal + newDonor.amount);
    event.target.reset();
  };

  const progressPercentage = Math.min((currentTotal / goal) * 100, 100);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Donation Tracker</h1>
      <div>
        <h2>Goal: ${goal}</h2>
        <div
          style={{
            background: "#ccc",
            borderRadius: "10px",
            height: "30px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progressPercentage}%`,
              background: "green",
              borderRadius: "10px",
              textAlign: "center",
              color: "white",
              lineHeight: "30px",
            }}
          >
            {progressPercentage.toFixed(2)}%
          </div>
        </div>
      </div>

      <h2>Recent Donations</h2>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>${donor.amount.toFixed(2)}</td>
              <td>{donor.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Make a Donation</h2>
      <form onSubmit={handleDonation}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:{" "}
            <input type="text" name="name" required style={{ marginRight: "10px" }} />
          </label>
          <label>
            Amount:{" "}
            <input
              type="number"
              name="amount"
              required
              min="1"
              style={{ marginRight: "10px" }}
            />
          </label>
          <button type="submit">Donate</button>
        </div>
      </form>
    </div>
  );
}

export default DonationTracker;

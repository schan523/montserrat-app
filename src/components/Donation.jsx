import React, { useState } from "react";
import "../styles/Donations.css";

function DonationPage() {
  const [donors, setDonors] = useState([]);
  const [goal, setGoal] = useState(1000);
  const [currentTotal, setCurrentTotal] = useState(0);

  const handleDonation = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newDonor = {
      name: formData.get("name"),
      bcID: formData.get("bcID"),
      email: formData.get("email"),
      graduationYear: formData.get("graduationYear"),
      amount: parseFloat(formData.get("amount")),
      method: formData.get("method"),
      anonymous: formData.get("anonymous") ? true : false,
      comments: formData.get("comments") || "",
      date: new Date().toISOString().split("T")[0],
    };
    setDonors([...donors, newDonor]);
    setCurrentTotal(currentTotal + newDonor.amount);
    event.target.reset();
  };

  // const progressPercentage = Math.min((currentTotal / goal) * 100, 100);

  return (
    <div className="container">
  
      {/* Right Content Area */}
      <div className="donation-tracker">
        <h1>Donate</h1>
        <h2>Make a Donation</h2>
        <form className="donation-form" onSubmit={handleDonation}>
          <label>
            Name: <input type="text" name="name" required />
          </label>
          <label>
            BC ID: <input type="number" name="bcID" required min="10000000" max="99999999" />
          </label>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              required
              pattern="[a-zA-Z0-9._%+-]+@bc\.edu"
            />
          </label>
          <label>
            Amount: <input type="number" name="amount" required min="1" />
          </label>
          <label>
            Donation Method:{" "}
            <select name="method" required>
              <option value="Eagle Card">Eagle Card</option>
              <option value="Credit Card">Credit Card</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </label>
          <label>Graduation Year:</label>
<div className="graduation-year-options">
  {Array.from({ length: 4 }, (_, i) => {
    const year = new Date().getFullYear() + i+1;
    return (
      <label key={year}>
        <input type="radio" name="graduationYear" value={year} required /> {year}
      </label>
    );
  })}
</div>
          <label>
            Anonymous Donation: <input type="checkbox" name="anonymous" />
          </label>
          <label>
            Comments: <textarea name="comments" rows="3" />
          </label>
          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
}

export default DonationPage;

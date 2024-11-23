import React, { useState } from "react";
import "../styles/Donations.module.css";

function DonationPage() {
  const trips = {
    "Jamaica Magis": {
      image: "https://www.bc.edu/content/bc-web/offices/mission-ministry/sites/montserrat/programs-services/jamaica-magis/_jcr_content/bottompar/bc_carousel_slider/carousel-item-0/par/bc_image_content/image.img.jpg/1553101020072.jpg", // Replace with actual image URL
      description:
        "The Jamaica Magis trip focuses on providing educational resources and building sustainable communities in underserved areas of Jamaica.",
    },
    "Civil Rights": {
      image: "https://www.bc.edu/content/bc-web/offices/mission-ministry/sites/montserrat/programs-services/jamaica-magis/civil-rights-immersion/_jcr_content/par/bc_image_content/image.img.jpg/1675196507749.jpg", // Replace with actual image URL
      description:
        "The Civil Rights trip explores the history and impact of the Civil Rights Movement in the U.S., encouraging participants to engage in modern-day activism.",
    },
    "Ghana Immersion": {
      image: "", // Replace with actual image URL
      description:
        "The Ghana Immersion trip focuses on cultural exchange and community development projects in Ghana, fostering mutual growth and understanding.",
    },
  };

  const [selectedTrip, setSelectedTrip] = useState("Jamaica Magis");
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

  const progressPercentage = Math.min((currentTotal / goal) * 100, 100);

  return (
    <div className="container">
      {/* Left Sidebar */}
      <div className="service-trips">
        <h2>Service Trips</h2>
        <div>
          <label>
            Select a Trip:{" "}
            <select
              value={selectedTrip}
              onChange={(e) => setSelectedTrip(e.target.value)}
            >
              {Object.keys(trips).map((trip) => (
                <option key={trip} value={trip}>
                  {trip}
                </option>
              ))}
            </select>
          </label>
        </div>
        <img src={trips[selectedTrip].image} alt={selectedTrip} />
        <p>{trips[selectedTrip].description}</p>
      </div>

      {/* Right Content Area */}
      <div className="donation-tracker">
        <h1>Donation Tracker</h1>
        <h2>Goal: ${goal}</h2>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          >
            {progressPercentage.toFixed(2)}%
          </div>
        </div>

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
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
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

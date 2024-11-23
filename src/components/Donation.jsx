import React, { useState } from "react";
import "../styles/Donations.css";

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
      image: "data:image/jpeg;base64,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", // Replace with actual image URL
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

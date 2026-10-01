import React, { useState } from "react";

// 07C: Event sign up
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a simple sign-up form with a name and a number of seats. Require a nonempty name and 1 to 4 seats. Show a helpful error or “Registered: [name] for [seats] seat(s).”

export default function Exercise07C() {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const seatNumber = Number(seats);

    if (trimmedName === "") {
      setMessage("Please enter a valid name.");
    } else if (seatNumber < 1 || seatNumber > 4 || isNaN(seatNumber)) {
      setMessage("Please select between 1 and 4 seats.");
    } else {
      setMessage(`Registered: ${trimmedName} for ${seatNumber} seat(s).`);
    }
  };

  return (
    <main>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name: </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="seats-input">Number of seats (1-4): </label>
          <input
            id="seats-input"
            type="number"
            min="1"
            max="4"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
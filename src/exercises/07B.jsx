import React, { useState } from "react";

// 07B: Name form
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a form with a name input and Submit button. When submitted, show “Please enter a name.” if it is empty or only spaces. Otherwise show “Saved: [name]”.

export default function Exercise07B() {
const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
if (name.trim() === "") {
      setMessage("Please enter a name.");
    } else {
      setMessage(`Saved: ${name.trim()}`);
    }
  };

  return (
    <main>
      <h1>Name form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name: </label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}

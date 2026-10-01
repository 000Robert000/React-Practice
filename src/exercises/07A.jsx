import React, { useState } from "react";

// 07A: Live name greeting
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create an input labeled “Your name”. As the user types, display “Hello, [name]!” below it.

export default function Exercise07A() {
  const [name, setName] = useState("");

  return (
    <main>
      <div>
        <label htmlFor="name-input">Your name: </label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p>Hello, {name}!</p>
    </main>
  );
}
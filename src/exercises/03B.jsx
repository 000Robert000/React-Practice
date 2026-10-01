import React, { useState } from "react";

// 03B: Counter and reset
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Add one button that increases the attendance number by one and another that resets it to zero.

export default function Exercise03B() {
  const [count, setPresent] = useState(0);
  function handleClick() {
    setPresent(previous => previous + 1);
  }
  function resetClick() {
    setPresent(0);
  }
  
  return (
    <main>
      <h1>03B Counter and reset</h1>
      <p>Attendance Number: {count}</p>
        <button onClick={handleClick}>Add one</button>
        <button onClick={resetClick}>Reset</button>
    </main>
  );
}

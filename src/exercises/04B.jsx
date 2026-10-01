import React, { useState } from "react";

// 04B: Choose a greeting
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Show “Morning” and “Evening” buttons. Clicking either button changes a line of text to “Good morning!” or “Good evening!”.

export default function Exercise04B() {
  const [count, setScore] = useState("");
    function mornClick() {
      setScore("Good Morning!");
    }
    function eveClick() {
      setScore("Good Evening!");
    }
  return (
    <main>
      <h1>{count}</h1>
      <button onClick={mornClick}>Morning</button>
      <button onClick={eveClick}>Evening</button>
    </main>
  );
}

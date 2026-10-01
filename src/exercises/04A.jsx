import React, { useState } from "react";

// 04A: Thank you button
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Display a button labeled “Say thanks”. When clicked, show “Thank you!” on the page.

export default function Exercise04A() {
  const [count, setScore] = useState("");
    function handleClick() {
      setScore("Thank You!");
    }
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Say Thanks</button>
    </main>
  );
}

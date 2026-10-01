import React, { useState } from "react";

// 04C: Cheer counter
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Show a button labeled “Cheer”. Each click increases a count. When the count reaches three, also show “Great support!”.

export default function Exercise04C() {
    const [count, setScore] = useState(0);    
    function handleClick() {
      setScore(previous => previous + 1);
    }

  return (
    <main>
      <p>{count}</p>
      {count >= 3 && <p>Great Support</p>}
      <button onClick={handleClick}>Cheer</button>

    </main>
  );
}

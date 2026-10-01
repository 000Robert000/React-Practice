import React, { useState } from "react";

// 05C: Weather message
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Set const temperature = 29. Show “Cold” below 20, “Warm” from 20 through 29, and “Hot” from 30 up. Test 19, 20, 29, and 30.

export default function Exercise05C() {
  const temperature = 29;

  let message = "";
  if (temperature < 20) {
    message = "Cold";
  } else if (temperature >= 30) {
    message = "Hot";
  } else {
    message = "Warm";
  }

  return (
    <main>
      <p>{message}</p>
    </main>
  );
}

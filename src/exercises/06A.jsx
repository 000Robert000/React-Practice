import React, { useState } from "react";

// 06A: Names on the board
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make an array of three names and show them as list items using map().

export default function Exercise06A() {
  const names = ["Robert", "Angel", "Bacani"];

  return (
    <main>
      <h1>List of names</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
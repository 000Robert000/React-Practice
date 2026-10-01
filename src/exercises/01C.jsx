import React, { useState } from "react";

// 01C: Simple profile
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Declare const studentName = "Mina" and const course = "IT" inside the component. Display both values in JSX. Change studentName and confirm the screen changes.

export default function Exercise01C() {
  const studentName = "Robert Santiago"
  const course = "IT"
  return (
    <main>
      <h1>{studentName}</h1>
      <p>{course}</p>
    </main>
  );
}

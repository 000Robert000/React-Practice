import React, { useState } from "react";

// 02B: Two student cards
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create StudentCard with name and course props. Render two cards with different names and courses.

function StudentCard({ name, course }) {
return <p>{name} from {course}</p>;
}

export default function Exercise02B() {
  return (
    <main>
      <StudentCard name="Mina" course="BSIT" />
      <StudentCard name="Leo" course="BSCS"/>
    </main>
  );
}

import React, { useState } from "react";

// 05B: Pass or retry
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Set const score = 74. Show “Pass” when score is at least 75; otherwise show “Retry”. Then test with 75.

export default function Exercise05B() {
  const score = 75
  return (
    <main>
       {score >= 75 && <p>Pass</p>}
        {score < 75 && <p>Retry</p>}
    </main>
  );
}

import React, { useState } from "react";

// 06C: Completed tasks
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create four task objects with id, label, and done values. Show only tasks where done is true. Also show how many completed tasks there are.

export default function Exercise06C() {
  const tasks = [
    { id: 1, label: "Buy Food", done: true },
    { id: 2, label: "Walk the dog", done: false },
    { id: 3, label: "Clean the dishes", done: true },
    { id: 4, label: "Read a novel", done: false }
  ];
const completedTasks = tasks.filter((task) => task.done);

  return (
    <main>
      <h1>Completed tasks</h1>
      <p>Completed tasks count: {completedTasks.length}</p>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
    </main>
  );
}

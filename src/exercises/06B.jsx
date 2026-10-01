import React, { useState } from "react";

// 06B: Book titles
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make an array of at least three book objects with unique id and title values. Display their titles in a list.

export default function Exercise06B() {
  const books = [
    { id: 1, title: "Lord of The Mysteries" },
    { id: 2, title: "Legendary Mechanic" },
    { id: 3, title: "The Novel's Extra" }
  ];

  return (
    <main>
      <h1>Book titles</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </main>
  );
}
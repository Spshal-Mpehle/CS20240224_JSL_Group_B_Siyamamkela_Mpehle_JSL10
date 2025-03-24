document.addEventListener("DOMContentLoaded", () => {
  // 🪲 Bug: Incorrect ID used for attaching the event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // 🪲 Bug: Incorrect element ID
        document.getElementById(
          "solveRoom1"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting"]);
    // 🪲 Bug: What's mssing from JS concepts?
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // 🪲 Bug: Incorrect function call
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById(
      "solveRoom2"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // 🪲 Bug: Asynchronous function ?
  document.getElementById("solveRoom3").addEventListener("click", async () => {
    const response = await fetch("directions.json");
    const directions = await response.json();
    const message = await navigateLabyrinth(directions);
    document.getElementById("room3Result").innerHTML = message;
  });
  // 🪲 Bug: Incorrect method
  document.getElementById("solveRoom3").innerHTML = message;
});

function findMostRecentBook(books) {
  // 🪲 Fixed: Corrected logic to find the most recent book
  return books.reduce((mostRecent, book) =>
    new Date(book.published) > new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

function findIntersection(setA, setB) {
  // 🪲 Fixed: Correct logic to find the intersection of two sets
  const intersection = new Set([...setA].filter((item) => setB.has(item)));
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

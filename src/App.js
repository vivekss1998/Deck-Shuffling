import React, { useState } from "react";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generate a standard deck of 52 cards
function generateDeck() {
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King"
  ];
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(`${rank} of ${suit}`);
    }
  }
  return deck;
}

function App() {
  const [deck, setDeck] = useState(generateDeck());

  // Function to shuffle the deck and update the state
  const shuffleDeck = () => {
    const shuffledDeck = shuffleArray([...deck]);
    setDeck(shuffledDeck);
  };

  return (
    <div className="App">
      <h1>Deck Shuffling</h1>
      <button onClick={shuffleDeck}>Shuffle Deck</button>
      <ol>
        {deck.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;

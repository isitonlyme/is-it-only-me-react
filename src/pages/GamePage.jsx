import { useState, useEffect } from "react";

import Card from "../components/Card";
import dateData from "/data/date.json";
import partyData from "/data/party.json";
import spicyData from "/data/spicy.json";

export default function GamePage() {
  const [renderdCards, setRenderedCards] = useState([]);

  // initialization of the array that will contain all the cards
  let data = [];

  // map helping the choose category function get the correct json
  const categoryMap = {
    date: dateData,
    party: partyData,
    spicy: spicyData,
  };

  // ------------------------------------------------------------
  // Creating a card in HTML and adds the question and category as text
  // ------------------------------------------------------------
  function chooseCategory(category) {
    if (category === "mixed") {
      // Add everything from the json files into the empty data array
      data = [...dateData, ...partyData, ...spicyData];
      renderedCards = [];
      renderCards();
    } else {
      const categoryData = categoryMap[category];
      if (categoryData) {
        data = [...categoryData];
        renderedCards = [];
        renderCards();
      } else {
        console.error("Category not found:", category);
      }
    }
  }

  // array containing all the cards that have been rendered so we dont render the same card twice

  // div containing all the cards
  const cardStack = document.getElementById("cardStack");

  // ------------------------------------------------------------
  // Creating a card in HTML and adds the question and category as text
  // ------------------------------------------------------------
  function createCardElement(index) {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerText = `Is it only me ${data[index].question} from ${data[index].category}`;
    return cardElement;
  }

  // ------------------------------------------------------------
  // Renders 5 cards when you load in to the page
  // ------------------------------------------------------------
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      addNewCard();
    }
    updateZIndices();
  }, []);

  // ------------------------------------------------------------
  // Update the z-index and position of all cards in the stack
  // ------------------------------------------------------------
  function updateZIndices() {
    const highestZIndex = 4;
    const cards = Array.from(cardStack.children);
    cards.forEach((card, index) => {
      card.style.zIndex = highestZIndex - index;
      card.style.transform = `scale(${(20 - index) / 20}) translateX(${
        15 * index
      }px) translateY(-${15 * index}px)`;
    });
  }

  // ------------------------------------------------------------
  // Remove the first card in the card stack div
  // ------------------------------------------------------------
  function removeCard() {
    if (cardStack.childElementCount > 0) {
      cardStack.removeChild(cardStack.firstChild);
      updateZIndices();
    } else {
      console.error("No cards left to remove");
    }
  }

  // ------------------------------------------------------------
  // Add a new card to the stack at the back of the pile
  // ------------------------------------------------------------
const handleAddNewCard = () => {
  const randomIndex = Math.floor(Math.random() * data.length);
  if (renderedCards.includes(randomIndex)) {
    if (renderedCards.length === data.length) {
      const lastCard = document.createElement("div");
      lastCard.className = "card";
      lastCard.textContent = "Oh no! no cards :(";
      cardStack.appendChild(lastCard);
      return;
    }
    addNewCard();
  } else {
    const cardElement = createCardElement(randomIndex);
    cardStack.appendChild(cardElement);
    renderedCards.push(randomIndex);
    updateZIndices();
  }
}

  function addNewCard() {
    if (data.length === 0) return;

    const randomIndex = Math.floor(Math.random() * data.length);
    
    if (renderedCards.includes(randomIndex))


    // if (renderedCards.includes(randomIndex)) {
    //   if (renderedCards.length === data.length) {
    //     const lastCard = document.createElement("div");
    //     lastCard.className = "card";
    //     lastCard.textContent = "Oh no! no cards :(";
    //     cardStack.appendChild(lastCard);
    //     return;
    //   }
    //   addNewCard();
    // } else {
    //   const cardElement = createCardElement(randomIndex);
    //   cardStack.appendChild(cardElement);
    //   renderedCards.push(randomIndex);
    //   updateZIndices();
    // }
  }

  return (
    <div>
      {renderedCards.map((card, index) => (
        <Card question="blabala" category="this is category" index={index}  />
      ))}
      <button onClick={addNewCard()}>Add New Card</button>
      <button onClick={removeCard()}>Remove Card</button>
      <button onClick={chooseCategory("mixed")}>Mixed</button>
      <button onClick={chooseCategory("party")}>Party</button>
      <button onClick={chooseCategory("spicy")}>Spicy</button>
      <button onClick={chooseCategory("date")}>Date</button>
    </div>
  );
}

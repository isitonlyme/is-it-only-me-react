import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import dateData from "../data/date.json";
import partyData from "../data/party.json";
import spicyData from "../data/spicy.json";

const categoryMap = {
  date: dateData,
  party: partyData,
  spicy: spicyData,
};

function Game() {
  const [data, setData] = useState([]);
  const [renderedCards, setRenderedCards] = useState(new Set());
  const [cardStack, setCardStack] = useState([]);

  const chooseCategory = (category) => {
    const categoryData =
      category === "mixed"
        ? [...dateData, ...partyData, ...spicyData]
        : categoryMap[category] || [];
    setData(categoryData);
    setRenderedCards(new Set());
    renderCards(categoryData);
  };

  const renderCards = (categoryData) => {
    const newCardStack = [];
    const newRenderedCards = new Set();

    while (
      newCardStack.length < 5 &&
      newRenderedCards.size < categoryData.length
    ) {
      const randomIndex = Math.floor(Math.random() * categoryData.length);
      if (!newRenderedCards.has(randomIndex)) {
        newCardStack.push(categoryData[randomIndex]);
        newRenderedCards.add(randomIndex);
      }
    }

    setCardStack(newCardStack);
    setRenderedCards(newRenderedCards);
  };

  const addNewCard = () => {
    if (renderedCards.size === data.length) {
      alert("Oh no! No more cards available :(");
      return;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * data.length);
    } while (renderedCards.has(randomIndex));

    setCardStack((prevStack) => [...prevStack, data[randomIndex]]);
    setRenderedCards((prevRendered) => new Set(prevRendered).add(randomIndex));
  };

  const removeCard = () => {
    setCardStack((prevStack) => prevStack.slice(1));
  };

  return (
    <div>
      <button className="btn" onClick={removeCard}>
        Remove
      </button>
      <button onClick={addNewCard}>Add Card</button>
      <button onClick={() => chooseCategory("mixed")}>Mixed</button>
      <button onClick={() => chooseCategory("date")}>Date</button>
      <button onClick={() => chooseCategory("party")}>Party</button>
      <button onClick={() => chooseCategory("spicy")}>Spicy</button>
      <section>
        <div className="card-stack">
          {cardStack.map((card, index) => (
            <Card
              key={index}
              question={card.question}
              category={card.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Game;

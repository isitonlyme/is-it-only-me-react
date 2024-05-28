import { createContext, useContext, useState, useEffect } from "react";
import dateData from "../data/date.json";
import partyData from "../data/party.json";
import spicyData from "../data/spicy.json";

const GameContext = createContext();

const categoryMap = {
  date: dateData,
  party: partyData,
  spicy: spicyData,
};

export const GameProvider = ({ children })  => {
  // state containing the questions from json file - depending on chosen category
  const [data, setData] = useState([]);
  // state containing all the cards that have been rendered - to keep track on which questions we have showed
  const [renderedCards, setRenderedCards] = useState(new Set());
  // Cards that are present on the screen
  const [cardStack, setCardStack] = useState([]);
  // State for keep track of the cards position and z-index
  const [cardStyles, setCardStyles] = useState([]);

  // ------------------------------------------------------------
  //  Function that checks if the chosen category is mixed, if not it checks which category is chosen and takes that JSON
  // ------------------------------------------------------------
  const chooseCategory = (category) => {
    // maybe change name of categoryData since it confuses all of us in renderCards also having categoryData
    const categoryData =
      category === "mixed"
        ? [...dateData, ...partyData, ...spicyData]
        : categoryMap[category] || [];
    setData(categoryData);
    setRenderedCards(new Set());
    renderCards(categoryData);
  };

  // ------------------------------------------------------------
  // Here we render the five cards
  // ------------------------------------------------------------
  const renderCards = (categoryData) => {
    const tempCardStack = [];
    const tempRenderedCards = new Set();

    // While the cardstack does not contain more than 5 cards, and is smaller than data
    while (
      tempCardStack.length < 5 &&
      tempRenderedCards.size < categoryData.length
    ) {
      const randomIndex = Math.floor(Math.random() * categoryData.length);
      if (!tempRenderedCards.has(randomIndex)) {
        tempCardStack.push(categoryData[randomIndex]);
        tempRenderedCards.add(randomIndex);
      }
    }

    setCardStack(tempCardStack);
    setRenderedCards(tempRenderedCards);
    console.log(tempCardStack)
  };

  // ------------------------------------------------------------
  // Update the z-index and position of all cards in the stack
  // ------------------------------------------------------------
  // const updateCardStyles = (stack) => {
  //   const highestZIndex = stack.length - 1;
  //   const newStyles = stack.map((_, index) => ({
  //     zIndex: highestZIndex - index,
  //     transform: `scale(${(20 - index) / 20}) translateX(${
  //       15 * index
  //     }px) translateY(-${15 * index}px)`,
  //   }));
  //   setCardStyles(newStyles);
  // };

  // ------------------------------------------------------------
  // Adds a new card, is the rendered cards the same as the added card
  // ------------------------------------------------------------
  const addNewCard = () => {
    if (renderedCards.size === data.length) {
      //maybe change to have an Oh no card instead of an alert
      alert("Oh no! No more cards available :(");
      return;
    }

    let randomIndex;
    do {
      // Generate a random index within the range of the data array
      randomIndex = Math.floor(Math.random() * data.length);
      // Continue generating a new random index while the generated index has already been rendered
    } while (renderedCards.has(randomIndex));

    setCardStack((prevStack) => {
      // Update the card stack with the new card
      const newStack = [...prevStack, data[randomIndex]]; // Create a new stack by adding the new card to the previous stack
      //updateCardStyles(newStack); // Update the styles of the cards in the new stack
      return newStack;
    });
    // Update the set of rendered cards to include the newly rendered card's index
    // Create a new Set from the previous set and add the new index to it
    setRenderedCards((prevRendered) => new Set(prevRendered).add(randomIndex));
  };

  // ------------------------------------------------------------
  // Remove card
  // ------------------------------------------------------------
  const removeCard = () => {
    setCardStack((prevStack) => {
      // Create a new array excluding the first element of the previous stack
      const newStack = prevStack.slice(0, prevStack.length - 1);
      //updateCardStyles(newStack);
      return newStack;
    });
  };

  // useEffect(() => {
  //   updateCardStyles(cardStack);
  // }, [cardStack]);

  return (
    <GameContext.Provider
      value={{
        data,
        cardStack,
        cardStyles,
        chooseCategory,
        addNewCard,
        removeCard,
        renderCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);

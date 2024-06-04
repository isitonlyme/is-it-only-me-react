import { createContext, useContext, useState } from "react";
import dateData from "../data/date.json";
import partyData from "../data/party.json";
import spicyData from "../data/spicy.json";

const GameContext = createContext();

const categoryMap = {
  date: dateData,
  party: partyData,
  spicy: spicyData,
};

export const GameProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // state containing all the cards that have been rendered - to keep track on which questions we have showed
  const [renderedCards, setRenderedCards] = useState(new Set());
  // Cards that are present on the screen
  const [cardStack, setCardStack] = useState([]);
  // Boolean state to check if the Oh No! card has been added or not
  const [finalCardAdded, setFinalCardAdded] = useState(false);

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
    setFinalCardAdded(false);
    renderCards(categoryData);
  };

  // ------------------------------------------------------------
  // Here we render the five cards
  // ------------------------------------------------------------
  const renderCards = (categoryData) => {
    const tempCardStack = [];
    const tempRenderedCards = new Set();

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
  };
  // ------------------------------------------------------------
  // Adds a new card, is the rendered cards the same as the added card
  // ------------------------------------------------------------
  const addNewCard = () => {
    if (renderedCards.size === data.length && !finalCardAdded) {
      setCardStack((prevStack) => [
        ...prevStack,
        {
          category: "Oh no!",
          question: "Whooo Hooo!!!\rYOU'RE DONE!\rLet's try another category:)",
        },
      ]);
      setFinalCardAdded(true);
      return;
    }

    if (finalCardAdded) return;

    let randomIndex;
    do {
      // Generate a random index within the range of the data array
      randomIndex = Math.floor(Math.random() * data.length);
      // Continue generating a new random index while the generated index has already been rendered
    } while (renderedCards.has(randomIndex));

    setCardStack((prevStack) => [...prevStack, data[randomIndex]]);
    setRenderedCards((prevRendered) => new Set(prevRendered).add(randomIndex));
  };

  return (
    <GameContext.Provider
      value={{
        data,
        cardStack,
        chooseCategory,
        addNewCard,
        renderCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);

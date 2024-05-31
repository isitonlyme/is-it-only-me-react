import { useState, useEffect } from "react";
import { useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useGame } from "../context/GameContext";
import Card from "../components/Card";
import Button from "../components/Button";

const to = (i) => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

function Game() {
  const { cardStack, addNewCard } = useGame();
  const [gone] = useState(() => new Set());
  const [cardFling, setCardFling] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [props, api] = useSprings(cardStack.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const isMoveable = index !== cardStack.length - 1;
      if (!isMoveable) return;
      const trigger = vx > 0.2; // If you flick hard enough it should trigger the card to fly out
      if (!active && trigger) {
        gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        setCardFling(true);
      }
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index); //
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flies out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card sed?tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: 0,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
    }
  );

  useEffect(() => {
    if (cardFling) {
      // Add a new card after the flung card
      addNewCard();
      setCardFling(false); // Reset the cardFling state
    }
  }, [cardFling, addNewCard]);

  // if gone.size ==== cardStack -1 (if the cards that have been swiped away is the same amount of cards that have been rendered)
  // show a button that takes you to category page
  useEffect(() => {
    console.log(`gone: ${gone.size}    cardStack: ${cardStack.length}`)
    if (gone.size === cardStack.length - 1) {
      setShowButton(true);
    }
  }, [gone.size])

  return (
    <div className="bg-gradient-to-bl from-indigo-700 via-indigo-400 to-indigo-700 flex items-center justify-center h-[100vh] touch-none overflow-hidden relative">
      {showButton && <Button label={"Play Again"} position={"absolute bottom-16 left-36"} link={"/categories"}/>}
      <Button
        label={"X"}
        position={"absolute top-20 right-10 text-2xl bg-transparent"}
        link={"/categories"}
      />
      {cardStack.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          zIndex={cardStack.length - index} // Set z-index based on card index
          props={props[index]}
          bind={bind}
        />
      ))}
    </div>
  );
}

export default Game;

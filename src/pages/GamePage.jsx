import { useState, useEffect, useRef } from "react";
import { useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useGame } from "../context/GameContext";
import Card from "../components/Card";
import Button from "../components/Button";
import swipe from "../assets/sounds/swipe.mp3";
import Modal from "../components/Modal";

const to = (i) => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

function GamePage() {
  const { cardStack, addNewCard } = useGame();
  const [gone] = useState(() => new Set());
  const [cardFling, setCardFling] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [props, api] = useSprings(cardStack.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const handlePlay = () => {
    audioRef.current.play();
  };

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
        handlePlay();
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
    if (gone.size === cardStack.length - 1) {
      setShowButton(true);
    }
  }, [gone.size, cardStack.length]);

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] touch-none overflow-hidden relative">
      <audio ref={audioRef}>
        <source src={swipe} type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>
      <div className="relative flex flex-col items-center justify-center flex-grow ">
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
      {showButton && (
        <Button
          label={"Play Again"}
          styling={
            " bg-[#e1f353] absolute bottom-36 left-36 text-black rounded-[10px] shadow-xl"
          }
          link={"/categories"}
        />
      )}
      <div className="flex justify-center w-full p-4 gap-4">
        <Button
          label={"take me back"}
          styling={"text-2xl bg-[#D0EE1A] text-[#7D53FF]"}
          link={"/categories"}
        />
        <Button
          label={"?"}
          styling={"text-2xl bg-[#D0EE1A] text-[#7D53FF]"}
          onClick={toggleModal}
        />
      </div>
      <Modal show={showModal} onClose={toggleModal} className="scaleUp"/>
    </div>
  );
}

export default GamePage;

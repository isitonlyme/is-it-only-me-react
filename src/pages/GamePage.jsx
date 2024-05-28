import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useGame } from "../context/GameContext";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from '@use-gesture/react';
import styles from './styles.module.css'

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1.5,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Game() {
  const { cardStack, cardStyles, addNewCard, removeCard } = useGame();

  const [props, api] = useSprings(cardStack.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  // useEffect(() => {
  //   api.start((i) => to(i));
  // }, [cardStack, api]);

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        api.start(i => to(i))
      }, 600)
  })
//   <Card
//   key={index}
//   rot={rot}
//   scale={scale}
//   question={card.question}
//   category={card.category}
//   style={cardStyles[index]}
// />

  return (
    <div>
      <section>
        <button className="btn" onClick={removeCard}>
          Remove
        </button>
        <button onClick={addNewCard}>Add Card</button>
        {cardStack.map((card, index) => {
          const { x, y, rot, scale } = props[index];
          return (
            <animated.div className={styles.deck} key={index} style={{ transform: trans(rot, scale), x, y }}>
              <animated.div
                {...bind(index)}
                style={{
                transform: interpolate([rot, scale], trans),
                }}>
                <p>{card.category}</p>
                <h3 className="font-bold">Is it only me...</h3>
                <p>{card.question}</p>
              </animated.div>
            </animated.div>
          );
        })}
      </section>
    </div>
  );
}

export default Game;

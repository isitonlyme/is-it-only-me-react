import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Button from "./Button";

const cards = [
  {
    title: "DISCUSS...",
    question: "with your friends and see if you are weird :)",
  },
  {
    title: "SWIPE...",
    question: "through our cards with controversial topics",
  },
  {
    title: "IS IT ONLY ME...",
    question: "that likes trying out a game before playing it?",
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function LPSection5() {
  const [showButton, setShowButton] = useState(false);
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2; // If you flick hard enough it should trigger the card to fly out
      if (!active && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
          setShowButton(false);
        }, 4500);
      if (gone.size === 3) {
        setShowButton(true);
      }
    }
  );

  return (
    <div className="flex flex-col items-center bg-gradient-to-bl from-indigo-700 via-indigo-400 to-indigo-700 h-[100vh] touch-none overflow-hidden relative">
      <div className="flex flex-col items-center justify-center flex-grow space-y-10">
        <div className="relative flex flex-col items-center justify-center flex-shrink-0 h-[60vh]">
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              showButton ? "opacity-100" : "opacity-0"
            }`}
          >
            {showButton && (
              <Button
                label={"DO NOT PRESS!"}
                styling={
                  " bg-red-700/70 backdrop-blur-2xl border border-slate-700 text-white rounded-full shadow-2xl px-20 py-20 w-20 h-20 flex justify-center items-center text-2xl"
                }
                link={"/categories"}
              />
            )}
          </div>
          {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
              className="absolute w-[300px] h-[200px] will-change-transform flex items-center justify-center touch-none"
              key={i}
              style={{ x, y }}
            >
              <animated.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                }}
                className="flex flex-col bg-white/0 backdrop-blur-2xl w-[80vh] max-w-[300px] h-[85vh] max-h-[510px] will-change-transform border border-slate-700 rounded-[40px] shadow-2xl touch-none p-6"
              >
                <p className="text-indigo-700 uppercase pb-20 text-2xl">
                  TEST EDITION
                </p>
                <h3 className="font-bold text-white text-4xl pb-20">
                  {cards[i].title}
                </h3>
                <p className="text-white text-3xl">{cards[i].question}</p>
              </animated.div>
            </animated.div>
          ))}
        </div>
        <p className="text-2xl text-center text-white">
          Let's explore the unspoken together
        </p>
        <Button
          label={"Play Game"}
          styling={"bg-[#e1f353] text-black rounded-[10px] shadow-xl px-12"}
          link={"/categories"}
        />
      </div>
    </div>
  );
}

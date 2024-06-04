import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Button from "./Button";

const cards = [
  {
    title: "Discuss...",
    question: "with your friends and see if you are weird :)",
  },
  {
    title: "Swipe...",
    question: "through our cards with controversial topics",
  },
  {
    title: "Is it only me...",
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
      // if (!active && gone.size === cards.length)
      //   setTimeout(() => {
      //     gone.clear();
      //     api.start((i) => to(i));
      //     setShowButton(false);
      //   }, 4500);
      if (gone.size === 3) {
        setShowButton(true);
      }
    }
  );

  return (
    <section className="flex flex-col items-center h-[100vh] overflow-hidden relative">
      <div className="flex flex-col items-center justify-center flex-grow space-y-10">
        <h2 className="text-4xl text-center text-white  mx-[0.5em]">
          Select a topic and explore the unspoken with your friends
        </h2>
        <div className="relative flex flex-col items-center justify-center flex-shrink-0 h-[60vh] w-[100vw]">
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              showButton ? "opacity-100" : "opacity-0"
            }`}
          >
            {showButton && (
              <>

              <Button
                label={"DO NOT PRESS!"}
                styling={
                  "h-28 w-28 text-xl rounded-full bg-red-700/70 text-white shadow-[0_8px_#292929] active:shadow-[0_3px_#292929] active:translate-y-[5px] hover:bg-red-900/70 hover:cursor-pointer"
                }
                link={"/categories"}
              />
            </>

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
                className="flex flex-col bg-gradient-to-b from-[#D0EE1A]/40 to-[#7D53FF] backdrop-blur-2xl w-[80vh] max-w-[300px] h-[85vh] max-h-[510px] will-change-transform border border-slate-700 rounded-[40px] shadow-2xl touch-none p-6"
              >
                <p className="text-2xl flex justify-center pb-20 select-none">
                  <span className="bg-[#7D53FF] text-[#D0EE1A] px-2 rounded-full mt-6">
                    How to play
                  </span>
                </p>
                <h3 className="font-bold text-[#D0EE1A] text-5xl pb-20 text-center -mt-4 select-none">
                  {cards[i].title}
                </h3>
                <p className="text-[#D0EE1A] text-3xl select-none">
                  {cards[i].question}
                </p>
              </animated.div>
            </animated.div>
          ))}
        </div>
        <Button
          label={"Play Game"}
          styling={
            "bg-[#e1f353] text-[#7D53FF] rounded-[10px] shadow-xl px-12 text-4xl active:translate-y-[5px]"
          }
          link={"/categories"}
        />
      </div>
    </section>
  );
}

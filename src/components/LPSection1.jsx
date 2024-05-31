
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection1() {
  const [words, setWords] = useState([]);
  const ref = useRef();
  const lettersRef = useRef([]);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const string = "Is it only me?";
    const splitWords = string.split(" ").map((word) =>
      word.split("").map((char, charIndex) => ({
        id: `${charIndex}`,
        char,
      }))
    );
    setWords(splitWords);
  }, []);

  useGSAP(() => {
    if (lettersRef.current) {
      lettersRef.current.forEach((wordLetters) => {
        wordLetters.forEach((letterEl) => {
          // Set initial random position
          gsap.set(letterEl, { y: `${Math.random() * 200 - 100}%`, x: `${Math.random() * 200 - 100}%`, rotate: Math.random() * 360 });

          const tween = gsap.to(letterEl, {
            y: 0,
            x: 0,
            rotate: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#word",
              start: "top top",
              end: "bottom center",
              scrub: true,
              markers: true,
              onUpdate: (self) => {
                if (self.progress === 1) {
                  setIsAnimationComplete(true);
                }
              },
            },
          });

          return () => {
            if (tween.scrollTrigger) {
              tween.scrollTrigger.kill();
            }
            tween.kill();
          };
        });
      });
    }
  }, [words]);

  return (
    <section
      id="word"
      ref={ref}
      className={`w-screen h-screen bg-gradient-to-bl flex flex-col justify-center items-center space-y-4 ${
        isAnimationComplete ? "" : "fixed"
      }`}
    >
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="flex space-x-1">
          {word.map((letter, letterIndex) => (
            <span
              key={letter.id}
              ref={(el) => {
                if (!lettersRef.current[wordIndex]) {
                  lettersRef.current[wordIndex] = [];
                }
                lettersRef.current[wordIndex][letterIndex] = el;
              }}
              className="uppercase font-bold text-[9rem] text-[white] tracking-tighter leading-none"
            >
              {letter.char}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}

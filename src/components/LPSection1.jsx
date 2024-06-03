import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection1() {
  const [words, setWords] = useState([]);
  const lettersRef = useRef([]);
  const arrowRef = useRef();

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
    // Initial animation triggered when the viewport reloads
    if (lettersRef.current) {
      lettersRef.current.forEach((wordLetters) => {
        wordLetters.forEach((letterEl) => {
          gsap.set(letterEl, {
            // Customize initial positions and rotations for each letter
            x: Math.random() < 0.5 ? "-100%" : "100%", // Move in from left or right side randomly
            y: 0, // Move in from top or bottom side randomly
            rotate: Math.random() * 360, // Random rotation
          });

          gsap.to(letterEl, {
            y: 0,
            x: 0,
            rotate: 0,
            duration: 2,
            ease: "power2.out",
            stagger: 0.1,
          });
        });
      });
    }

    // Scroll-triggered animation for rotating and mixing again
    if (lettersRef.current) {
      lettersRef.current.forEach((wordLetters, wordIndex) => {
        wordLetters.forEach((letterEl, letterIndex) => {
          let moveAmount = 400; // default move amount
          // Adjust conditions based on wordIndex
          if (wordIndex === 0 && letterIndex % 3 === 0) {
            moveAmount = 500; // move certain letters up more in the first word
          } else if (wordIndex === 1 && letterIndex % 2 === 0) {
            moveAmount = 600; // move certain letters up more in the second word
          } else if (wordIndex === 2 && letterIndex % 3 === 0) {
            moveAmount = 600; // move certain letters up more in the first word
          } else if (wordIndex === 3 && letterIndex % 2 === 0) {
            moveAmount = 600; // move certain letters up more in the second word
          }
          gsap.to(letterEl, {
            y: `-=${moveAmount}`, // move up by moveAmount
            duration: 5,
            ease: "sine.inOut",
            stagger: 0.1,
            scrollTrigger: {
              trigger: "#word",
              start: "10 top", // Adjust the start position as needed
              end: "bottom -50%", // Adjust the end position as needed
              scrub: true,
            },
          });
        });
      });
    }
    if (arrowRef.current) {
      gsap.set(arrowRef.current, { opacity: 0 });
      
      // Delay appearance of the arrow
      gsap.to(arrowRef.current, {
        opacity: 1,
        delay: 2,
        duration: 0.5,
        onComplete: () => {
          // Pulse animation for the arrow (up and down movement)
          gsap.to(arrowRef.current, {
            y: -15, // Move up by 20px
            repeat: Infinity,
            yoyo: true,
            ease: "power1.inOut",
            duration: 0.8,
          });
        },
      });
    }
  }, [words]);

  return (
    <section
      id="word"
      className="w-screen h-screen flex flex-col justify-center items-center "
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
              className="font-bold text-[30vw] tracking-wide leading-none text-main-color"
            >
              {letter.char}
            </span>
          ))}
        </div>
      ))}

      <span ref={arrowRef} className="text-[30vw] text-main-color mt-[-40px] flex justify-start items-start">

        ↓
      </span>
    </section>
  );
}

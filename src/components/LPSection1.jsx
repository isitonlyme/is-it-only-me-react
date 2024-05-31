import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function LPSection1() {
  const [words, setWords] = useState([]);
  const lettersRef = useRef([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const string = "Is it only me?";
    const splitWords = string.split(" ").map((word) =>
      word.split("").map((char, charIndex) => ({
        id: `${charIndex}`,
        char,
      }))
    );
    setWords(splitWords);
    console.log(splitWords)
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      gsap.registerPlugin(ScrollTrigger);
  
      lettersRef.current.forEach((wordLetters, wordIndex) => {
        wordLetters.forEach((letterEl, letterIndex) => {
          let moveAmount = 200; // default move amount
          // Adjust conditions based on wordIndex
          if (wordIndex === 0 && letterIndex % 3 === 0) {
            moveAmount = 500; // move certain letters up more in the first word
          } else if (wordIndex === 1 && letterIndex % 2 === 0) {
            moveAmount = 300; // move certain letters up more in the second word
          } else if (wordIndex === 2 && letterIndex % 3 === 0) {
            moveAmount = 500; // move certain letters up more in the first word
          } else if (wordIndex === 3 && letterIndex % 2 === 0) {
            moveAmount = 300; // move certain letters up more in the second word
          } 
          gsap.to(letterEl, {
            y: `-=${moveAmount}`, // move up by moveAmount
            duration: 5,
            rotate: 20,
            ease: "sine.inOut",
            stagger: 0.2,
            scrollTrigger: {
              trigger: scrollRef.current,
              start: "-600 top",
              end: "top 50%",
              scrub: true,
              markers: true,
            },
          });
        });
      });
    }
  }, [words]);  

  return (
    <div className="">
      <section className="w-screen h-screen bg-custom-bg flex flex-col justify-center items-center space-y-4">
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
      {/* <section ref={scrollRef} className="w-screen h-screen bg-[#0D2D75]"></section> */}
    </div>
  );
}

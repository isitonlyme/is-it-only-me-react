import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection3() {
  const ref = useRef();
  const progressRef = useRef();
  const specialTextRef = useRef();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressElement = progressRef.current;
    const specialTextElement = specialTextRef.current;

    if (!progressElement || !specialTextElement) {
      console.error("Progress or specialText elements are not defined.");
      return;
    }

    // Combined animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Loading",
        start: "top top",
        duration: 50,
        end: "+=400", // Increased value to make the user stay longer
        scrub: true, // Fine-tuned scrub value for smoother animation
        pin: true,
      },
    });

    // Progress bar animation
    tl.fromTo(
      progressElement,
      { value: 0 },
      {
        value: 100,
        ease: "none",
        duration: 10,
        onUpdate: function () {
          const progressValue = this.progress() * 100;
          progressElement.value = progressValue;
        },
      }
    );

    // Ensure specialText is initially hidden
    gsap.set(specialTextElement, { opacity: 0 });

    // Text animation triggered after progress completes
    tl.to(
      specialTextElement,
      {
        opacity: 1,
        duration: 3,
        onStart: () => {
          specialTextElement.classList.remove("hidden");
          specialTextElement.classList.add("block");
        },
      },
      "+=0.09" // Start after a slight delay to ensure smooth transition
    );

    tl.fromTo(
      specialTextElement.querySelectorAll(".line"),
      { opacity: 0, y: 100, skewY: 7 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 0.2,
        ease: "power4.out",
        stagger: {
          amount: 1, // Adjust this for staggering effect
        },
      },
      "-=0.5" // Overlap with the start of the text becoming visible
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <section
        className="flex flex-col justify-start items-center w-screen min-h-[140vh] top-0"
        id="Loading"
        ref={ref}
      >
        <div className="flex justify-center items-center flex-col visible mt-10">
          <Button
            label={"Play Game"}
            styling={
              "bg-main-color text-purple-text-color rounded-[10px] shadow-xl px-12 text-4xl active:translate-y-[5px]"
            }
            link={"/categories"}
          />
          <p className="text-2xl text-white mt-2">Or keep scrolling</p>
        </div>
        <div>
          <h2 className="text-3xl tracking-wide mt-16 font-extrabold text-white justify-center items-center">
            Loading a hurtful fact...
          </h2>
          <div className="flex flex-col justify-center items-center mt-10 text-xl mb-12">
            <progress
              ref={progressRef}
              max="100"
              value="0"
              className="w-4/5"
            ></progress>
            {/* <div className="mt-5 text-white">Loading a hurtful fact...</div> */}
          </div>
        </div>
        <div
          ref={specialTextRef}
          id="specialText"
          className="hidden text-[6rem] font-bold text-white text-center leading-none"
        >
          <span className="line text-white">You're</span> <br></br>
          <span className="line text-white">not so</span>
          <br></br>
          <span className="line text-white">special</span>
        </div>
      </section>
    </>
  );
}

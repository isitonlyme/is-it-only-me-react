import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection3() {
  const ref = useRef();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const progressElement = document.querySelector("progress");
    console.log("Setting up GSAP animation");

    const tween = gsap.fromTo(
      progressElement,
      { value: 0 },
      {
        value: 100,
        ease: "none",
        scrollTrigger: {
          trigger: "#Loading",
          start: "top top",
          end: "bottom center",
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            console.log("onUpdate progress:", self.progress);
            progressElement.value = self.progress * 100;
          },
          pin: "#Loading",
          pinSpacing: true,
          onComplete: () => {
            console.log("Animation complete");
            setIsAnimationComplete(true);
          },
        },
      }
    );

    // Cleanup function to remove the ScrollTrigger instance
    return () => {
      console.log("Cleaning up GSAP animation");
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, []);

  useEffect(() => {
    if (isAnimationComplete) {
      console.log("isAnimationComplete state is true");
    }
  }, [isAnimationComplete]);

  return (
    <>
      <div className="h-screen bg-gray-400 text-9xl">PLACEHOLDER START</div>
      <section
        className="flex flex-col justify-start items-center w-screen h-screen bg-white top-0"
        id="Loading"
        ref={ref}
      >
        <div>
          <h2 className="uppercase text-4xl tracking-wide mt-32">
            Sorry to tell you
          </h2>
          <div className="flex flex-col justify-center items-center mt-10 text-xl">
            <progress max="100" value="0" className="w-full"></progress>
            <div>Loading a hurtful fact...</div>
          </div>
          <div
            id="specialText"
            className={isAnimationComplete ? "block" : "hidden"}
          >
            You're not so special
          </div>
        </div>
      </section>
      <div className="h-[100vh] bg-gray-400 text-9xl" id="Ending">
        PLACEHOLDER END
      </div>
    </>
  );
}

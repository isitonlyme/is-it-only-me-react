import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function LPSection4() {
  const boxRef = useRef(null);

  useEffect(() => {
    // GSAP animation on the box element
    gsap.fromTo(
      boxRef.current,
      { scale: 0.05, rotation: 0 },
      {
        scale: 1,
        rotation: 3 * 360,
        duration: 4,
        ease: "power2.in",
        repeat: 1,
        yoyo: false,
      }
    );
  }, []);

  return (
    <section className="border-2 border-green-500  h-auto w-screen  flex flex-col items-center justify-center bg-custom-bg  text-white">
      <h2 className="block m-10 text-center text-4xl font-semibold">
        It’s a common human experience for
      </h2>

      <div
        className="text-center text-[5.9em] font-semibold"
        ref={boxRef}
        // style={{
        //   width: "2em",
        //   height: "2em",
        //   background: "lightblue",
        //   margin: "2em auto",
        // }}
      >
        <div className="flex gap-0.1">
          <div>99,9%</div>
          <div className="ml-3 mt-3 ">*</div>
        </div>
      </div>

      <h2 className="block m-10 text-center text-4xl font-semibold">
        to question our own uniqueness.
      </h2>
      <p className="m-10 text-[1.5em]">
        On "Is it Only Me?", we invite you to swipe through a variety of
        thoughts — some you might have never said out loud.
      </p>
      <p className="m-auto">* We made up that number</p>
    </section>
  );
}

export default LPSection4;

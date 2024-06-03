import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function LPSection4() {
  const procentRef = useRef(null);
  const asteriskRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center", // When the top of the section hits the center of the viewport
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(procentRef.current, {
            duration: 0.7,
            text: "99,9%",
            ease: "power2.out",
          }).to(
            asteriskRef.current,
            {
              duration: 1,
              delay: 1,
              text: "*",
              ease: "power2.out",
              rotate: -340,
            },
            "-=1.0"
          );
        },
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-screen flex flex-col items-center justify-center bg-custom-bg text-white"
    >
      <h2 className="block m-10 text-center text-4xl font-semibold">
        It’s a common human experience for
      </h2>

      <div className="text-center text-[5.9em] font-semibold relative">
        <div className="flex gap-0.1">
          <div id="procent" ref={procentRef}>
            oh no
          </div>
          <div
            id="asterisk"
            ref={asteriskRef}
            className="absolute top-0 left-full ml-5 mt-3 text-3xl"
          ></div>
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

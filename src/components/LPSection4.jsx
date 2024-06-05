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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center", // When the top of the section hits the center of the viewport
        end: "bottom center", // When the bottom of the section hits the center of the viewport
        scrub: true,
        opacity: 0,
      },
    });

    tl.to(procentRef.current, {
      duration: 6,
      text: "99,9%",
      ease: "power3.inOut",
      stagger:1,
    }).to(
      asteriskRef.current,
      {
        duration: 1,
        delay: 0.02,
        text: "*",
        ease: "power2.out",
        rotate: -340,
      },
      "-=0.2"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" w-screen pt-[2em] flex flex-col items-center justify-center text-white "
    >
      <div className="text-center text-[5.9em] font-semibold relative pt-8">
        <div className="flex gap-0.1 text-main-color ">
          <div id="procent" ref={procentRef}>
            00,0%
          </div>
          <div
            id="asterisk"
            ref={asteriskRef}
            className="absolute top-0 left-full  mt-10 text-3xl "
          ></div>
        </div>
      </div>

      <h2 className="block mt-[0.5em] mx-[0.5em] text-center text-[10vw] leading-none font-normal">
        of us question <br></br>our own uniqueness
      </h2>
      <p className="pb-[5em]  mt-[1em]">* We made up that number</p>
    </section>
  );
}

export default LPSection4;

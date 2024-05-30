import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function LPSection3() {
  const ref = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        "progress",
        { value: 0 },
        {
          value: 100,
          ease: "none",
          scrollTrigger: {
            trigger: "#Loading",
            endTrigger: "#Ending",
            start: "top+=1000 top",
            end: "center center",
            scrub: 2,
            markers: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <>
      <div className="h-screen bg-gray-400 text-9xl"> PLACEHOLDER START</div>
      <section
        id="Loading"
        className="flex flex-col justify-start items-center w-screen h-screen bg-white"
        ref={ref}
      >
        <div id="content">
          <h2 className="uppercase text-4xl tracking-wide mt-32">
            Sorry to tell you
          </h2>
          <div className="flex flex-col justify-center items-center mt-10 text-xl">
            <progress max="100" value="0" className="w-full"></progress>
            <div>Loading a hurtful fact...</div>
          </div>
          <div>You're not so special</div>
        </div>
      </section>
      <div className="h-screen bg-gray-400 text-9xl" id="Ending">
        PLACEHOLDER END
      </div>
    </>
  );
}

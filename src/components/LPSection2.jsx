import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection2() {
  const marqueeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (marqueeRefs.every((ref) => ref.current)) {
      marqueeRefs.forEach((ref, index) => {
        const element = ref.current;
        const direction = index % 2 === 0 ? 100 : -100;

        gsap.fromTo(
          element,
          { x: direction },
          {
            x: -direction,
            visibility: "visible",
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              markers: true,
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <section className="h-screen">
        <h2 className="text-white text-4xl font-semibold text-center px-5">
          You’ve probably wondered
          <br />
          that at some point.
        </h2>
        <div
          id="marqueeDiv"
          className="pt-32 overflow-hidden relative w-full h-full"
        >
          <div className="flex flex-col">
            <span
              ref={marqueeRefs[0]}
              className="marquee text-2xl bg-white text-center p-1 mb-5 inline-block transform rotate-12 whitespace-nowrap"
              style={{ top: "0px" }}
            >
              that has an official date outfit?
            </span>
            <span
              ref={marqueeRefs[1]}
              className="marquee text-2xl  text-center bg-white p-1 mb-5 inline-block transform -rotate-12 whitespace-nowrap"
              style={{ top: "30px" }}
            >
              that has a crush on Bill Clinton?
            </span>
            <span
              ref={marqueeRefs[2]}
              className="marquee text-2xl  text-center bg-white p-1 mb-5 inline-block transform rotate-12 whitespace-nowrap"
              style={{ top: "60px" }}
            >
              who feels a bit of relief when plans get canceled?
            </span>
            <span
              ref={marqueeRefs[3]}
              className="marquee  text-center text-2xl bg-white p-1 mb-5 inline-block transform -rotate-12 whitespace-nowrap"
              style={{ top: "90px" }}
            >
              who enjoys the smell of gasoline?
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Button
            label={"Play Game"}
            styling={"bg-[#e1f353] text-black rounded-[10px] shadow-xl px-12"}
            link={"/categories"}
          />
        </div>
      </section>
    </div>
  );
}

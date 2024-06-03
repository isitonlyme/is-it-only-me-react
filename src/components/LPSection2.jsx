import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection2() {
  const marqueeRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    // Cleanup function to kill the animation and ScrollTrigger instance
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <section className="h-screen overflow-hidden">
        <div className="max-w-screen-lg px-4 ">
          <h2
            ref={textRef}
            className="text-white text-4xl font-semibold text-center mx-12"
          >
            You’ve probably wondered<br></br>that at some point.
          </h2>
        </div>
        <div className="">
          <div
            id="marqueeDiv"
            className="pt-32 relative w-full h-full overflow-hidden"
          >
            <div className="flex flex-col pb-20">
              <span
                ref={marqueeRefs[0]}
                className="marquee text-3xl bg-white text-center p-1 mb-5 inline-block transform rotate-2 whitespace-nowrap"
                style={{ top: "0px" }}
              >
                that has an official date outfit?
              </span>
              <span
                ref={marqueeRefs[1]}
                className="marquee text-3xl  text-center bg-white p-1 mb-5 inline-block transform -rotate-12 whitespace-nowrap"
                style={{ top: "30px" }}
              >
                that has a crush on Bill Clinton?
              </span>
              <span
                ref={marqueeRefs[2]}
                className="marquee text-3xl  text-center bg-white p-1 mb-5 inline-block transform rotate-12 whitespace-nowrap"
                style={{ top: "60px" }}
              >
                who feels a bit of relief when plans get canceled?
              </span>
              <span
                ref={marqueeRefs[3]}
                className="marquee  text-center text-3xl bg-white p-1 mb-6 inline-block transform -rotate-0 whitespace-nowrap"
                style={{ top: "90px" }}
              >
                who enjoys the smell of gasoline?
              </span>
              <span
                ref={marqueeRefs[4]}
                className="marquee text-3xl  text-center bg-white p-1 mb-5 inline-block transform rotate-12 whitespace-nowrap"
                style={{ top: "90px" }}
              >
                who judges people by their taste in music or TV shows?
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center flex-col visible">
        <Button
          label="Play Game"
          styling="bg-[#e1f353] text-black rounded-[10px] shadow-xl px-12"
          link="/categories"
        />
        <p className="text-sm text-white mt-2">Or keep scrolling</p>
      </div>
    </div>
  );
}

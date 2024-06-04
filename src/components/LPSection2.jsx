import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection2() {
  const marqueeRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
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
        const direction = index % 2 === 0 ? 100 : -200;

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
              scrub: index === 0 ? 1 : index === 3 ? 3 : 0.2, // Adjust the scrub value for each span
            },
          }
        );
      });
    }
  }, []);

  return (
    <section>
      <h2
        ref={textRef}
        className="block mx-[0.5em] text-center text-4xl font-normal text-white"
      >
        You’ve probably wondered<br></br>that at some point.
      </h2>
      <div
        id="marqueeDiv"
        className="pt-[3em] relative w-full h-full flex flex-col justify-center items-center overflow-hidden"
      >
        <div className=" pb-20">
          <span
            ref={marqueeRefs[0]}
            className="marquee text-3xl bg-white text-center p-1 mb-5 flex flex-col  mx-52 inline-block transform rotate-2 whitespace-nowrap"
            style={{ top: "0px" }}
          >
            that has an official date outfit?
          </span>
          <span
            ref={marqueeRefs[1]}
            className="marquee text-4xl  text-center bg-white p-1 mb-5 mx-52 inline-block transform -rotate-12 whitespace-nowrap"
            style={{ top: "30px" }}
          >
            that has a crush on Bill Clinton?
          </span>
          <span
            ref={marqueeRefs[2]}
            className="marquee text-3xl  text-center bg-white p-1 mb-5 inline-block transform rotate-8 whitespace-nowrap"
            style={{ top: "60px" }}
          >
            who feels a bit of relief when plans get canceled?
          </span>
          <span
            ref={marqueeRefs[3]}
            className="marquee  text-center text-5xl bg-white p-1 mx-32 mb-6 inline-block transform -rotate-0 whitespace-nowrap"
            style={{ top: "90px" }}
          >
            am I weird?{" "}
          </span>
          <span
            ref={marqueeRefs[4]}
            className="marquee text-3xl text-center bg-white p-1 mb-5 inline-block transform -rotate-0"
            style={{ top: "90px" }}
          >
            who judges people by their taste in music or TV shows?
          </span>
          <span
            ref={marqueeRefs[5]}
            className="marquee text-3xl text-center mx-60 bg-white p-1 mb-5 inline-block transform -rotate-12 whitespace-nowrap"
            style={{ top: "100px" }}
          >
            who enjoys the smell of gasoline?
          </span>
        </div>
      </div>
    </section>
  );
}

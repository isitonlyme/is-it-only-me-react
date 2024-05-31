import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LPSection2() {
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

  return (
    <div className="h-screen">
      <section className="h-screen bg-custom-bg flex justify-center items-start px-5 -mt-10">
        <h2
          ref={textRef}
          className="text-white text-4xl font-semibold text-center"
        >
          You’ve probably wondered<br></br>that at some point.
        </h2>
      </section>
    </div>
  );
}

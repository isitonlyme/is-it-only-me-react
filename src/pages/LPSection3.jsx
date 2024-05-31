// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function LPSection3() {
//   const ref = useRef();
//   const progressRef = useRef();
//   const specialTextRef = useRef();

//   useEffect(() => {
//     const progressElement = progressRef.current;
//     const specialTextElement = specialTextRef.current;

//     if (!progressElement || !specialTextElement) {
//       console.error("Progress or specialText elements are not defined.");
//       return;
//     }

//     console.log("Setting up GSAP animation");

//     // Combined animation timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#Loading",
//         start: "top top",
//         end: "+=280", // Adjust as needed for the length of the sticky section
//         scrub: true,
//         pin: true,
//         markers: process.env.NODE_ENV !== "production",
//       },
//     });

//     // Progress bar animation
//     tl.fromTo(
//       progressElement,
//       { value: 0 },
//       {
//         value: 100,
//         ease: "none",
//         duration: 1,
//         onUpdate: function () {
//           const progressValue = this.progress() * 100;
//           console.log("onUpdate progress:", this.progress());
//           progressElement.value = progressValue;
//         },
//       }
//     );

//     // Ensure specialText is initially hidden
//     gsap.set(specialTextElement, { opacity: 0 });

//     // Text animation triggered after progress completes
//     tl.to(
//       specialTextElement,
//       {
//         opacity: 1,
//         duration: 1,
//         onStart: () => {
//           specialTextElement.classList.remove("hidden");
//           specialTextElement.classList.add("block");
//         },
//       },
//       "+=0.12" // Start after a slight delay to ensure smooth transition
//     );

//     tl.fromTo(
//       specialTextElement.querySelectorAll(".line"),
//       { opacity: 0, y: 100, skewY: 7 },
//       {
//         opacity: 1,
//         y: 0,
//         skewY: 0,
//         duration: 0.5,
//         ease: "power4.out",
//         stagger: {
//           amount: 0.3, // Adjust this for staggering effect
//         },
//       },
//       "-=1" // Overlap with the start of the text becoming visible
//     );

//     return () => {
//       console.log("Cleaning up GSAP animation");
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       tl.kill();
//     };
//   }, []);

//   return (
//     <>
//       <section
//         className="flex flex-col justify-start items-center w-screen h-screen bg-white top-0"
//         id="Loading"
//         ref={ref}
//       >
//         <div>
//           <h2 className="uppercase text-4xl tracking-wide mt-32">
//             Sorry to tell you
//           </h2>
//           <div className="flex flex-col justify-center items-center mt-10 text-xl">
//             <progress
//               ref={progressRef}
//               max="100"
//               value="0"
//               className="w-full"
//             ></progress>
//             <div>Loading a hurtful fact...</div>
//           </div>
//         </div>
//         <div
//           ref={specialTextRef}
//           id="specialText"
//           className="hidden text-[4rem]"
//         >
//           <span className="line">You're </span>{" "}
//           <span className="line">not</span>
//           <br></br>
//           <span className="line">so special</span>
//         </div>
//       </section>
//       <div className="h-[100vh] bg-gray-400 text-4xl" id="Ending">
//         PLACEHOLDER END
//       </div>
//     </>
//   );
// }
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

    console.log("Setting up GSAP animation");

    // Combined animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Loading",
        start: "top top",
        end: "+=280", // Adjust as needed for the length of the sticky section
        scrub: true,
        pin: true,
        markers: process.env.NODE_ENV !== "production",
      },
    });

    // Progress bar animation
    tl.fromTo(
      progressElement,
      { value: 0 },
      {
        value: 100,
        ease: "none",
        duration: 1,
        onUpdate: function () {
          const progressValue = this.progress() * 100;
          console.log("onUpdate progress:", this.progress());
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
        duration: 1,
        onStart: () => {
          specialTextElement.classList.remove("hidden");
          specialTextElement.classList.add("block");
        },
      },
      "+=0.12" // Start after a slight delay to ensure smooth transition
    );

    tl.fromTo(
      specialTextElement.querySelectorAll(".line"),
      { opacity: 0, y: 100, skewY: 7 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 0.5,
        ease: "power4.out",
        stagger: {
          amount: 0.3, // Adjust this for staggering effect
        },
      },
      "-=1" // Overlap with the start of the text becoming visible
    );

    return () => {
      console.log("Cleaning up GSAP animation");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
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
            <progress
              ref={progressRef}
              max="100"
              value="0"
              className="w-full"
            ></progress>
            <div>Loading a hurtful fact...</div>
          </div>
        </div>
        <div
          ref={specialTextRef}
          id="specialText"
          className="hidden text-[4rem]"
        >
          <span className="line">You're </span>{" "}
          <span className="line">not</span>
          <br></br>
          <span className="line">so special</span>
        </div>
      </section>
      <div className="h-[100vh] bg-gray-400 text-4xl" id="Ending">
        PLACEHOLDER END
      </div>
    </>
  );
}

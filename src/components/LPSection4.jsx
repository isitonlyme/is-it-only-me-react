// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// function LPSection4() {
//   const boxRef = useRef(null);

//   useEffect(() => {
//     // GSAP animation on the box element
//     gsap.fromTo(
//       boxRef.current,
//       { scale: 0.05, rotation: 0 },
//       {
//         scale: 1,
//         rotation: 3 * 360,
//         duration: 4,
//         ease: "power2.in",
//         repeat: 1,
//         yoyo: false,
//       }
//     );
//   }, []);

//   return (
//     <section className="border-2 border-green-500  h-auto w-screen  flex flex-col items-center justify-center bg-custom-bg  text-white">
//       <h2 className="block m-10 text-center text-4xl font-semibold">
//         It’s a common human experience for
//       </h2>

//       <div
//         className="text-center text-[5.9em] font-semibold"
//         ref={boxRef}
//         // style={{
//         //   width: "2em",
//         //   height: "2em",
//         //   background: "lightblue",
//         //   margin: "2em auto",
//         // }}
//       >
//         <div className="flex border-2 border-red-500 gap-0.1">
//           <div>99,9%</div>
//           <div className=" text-red-500 text-[0.5em] ml-3 mt-3 ">*</div>
//         </div>
//       </div>

//       <h2 className="block m-10 text-center text-4xl font-semibold">
//         to question our own uniqueness.
//       </h2>
//       <p className="m-10 text-[1.5em]">
//         On "Is it Only Me?", we invite you to swipe through a variety of
//         thoughts — some you might have never said out loud.
//       </p>
//       <p className="m-auto">* We made up that number</p>
//     </section>
//   );
// }

// export default LPSection4;
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function LPSection4() {
  const boxRef = useRef(null);
  const shinyRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    const shinyElement = shinyRef.current;

    // Function to start the animation
    const startAnimation = () => {
      // GSAP animation on the box element
      gsap.fromTo(
        boxElement,
        { scale: 0.5, rotation: 0 },
        {
          scale: 1,
          rotation: 3 * 360,
          duration: 2,
          opacity: 0.2,
          ease: "power1.inOut",
          onComplete: () => {
            // Animation complete, reset scale and rotation
            gsap.set(boxElement, { scale: 1, rotation: 0 });

            // Start pulsing effect for the shiny element
            gsap.to(shinyElement, {
              duration: 0.5,
              scale: 1.1,
              opacity: 1,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
            });
          },
        }
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      // Get the position of the box relative to the viewport
      const boxPosition = boxElement.getBoundingClientRect();

      // Check if the box is in the viewport
      if (
        boxPosition.top >= 0 &&
        boxPosition.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        // Box is in view, start the animation
        startAnimation();
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className=" h-auto w-screen  flex flex-col items-center justify-center bg-custom-bg  text-white">
      <h2 className="block m-10 text-center text-4xl font-semibold">
        It’s a common human experience for
      </h2>

      <div
        className="text-center text-[5.9em] font-semibold"
        ref={(el) => {
          boxRef.current = el;
          shinyRef.current = el;
        }}
      >
        <div className="flex gap-0.1">
          <div>99,9%</div>
          <div className="text-[0.5em] ml-3 mt-3 ">*</div>
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

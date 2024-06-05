import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Button from "./Button";
import { gsap } from "gsap";

const Modal = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isClosing, setIsClosing] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsClosing(false);
    } else if (isVisible) {
      setIsClosing(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
        onClose();
      }, 500); // 500ms should match your scaleDown animation duration
    }
  }, [show, onClose, isVisible]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose();
    }, 500); // 500ms should match your scaleDown animation duration
  };

  useLayoutEffect(() => {
    if (cardRef.current) {
      const animation = gsap.fromTo(
        cardRef.current,
        { x: -20, rotation: -5 }, // Starting position and rotation
        {
          x: 20, // Ending position
          rotation: 5, // Ending rotation
          repeat: -1, // Infinite repeat
          yoyo: true, // Yo-yo effect
          ease: "power2.inOut",
          duration: 0.8,
        }
      );

      return () => {
        animation.kill(); // Cleanup the animation on unmount or when dependencies change
      };
    }
  }, [isVisible]); // Run only when isVisible changes

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <div
        className={`bg-[#7D53FF] p-10 shadow-lg w-screen h-screen ${
          isClosing ? "animate-scaleDown" : "animate-scaleUp"
        }`}
      >
        <div className="flex justify-end">
          <button className="text-[#D0EE1A]" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="mt-4 items-center justify-center flex flex-col text-center">
          <h2 className="font-bold text-4xl tracking-wide text-[#D0EE1A]">
            How To Play
          </h2>
          <ol className="text-[#D0EE1A] text-2xl">
            <li className="mb-5 pt-4">
              <p className="text-[6vw] font-bold">Pick a Category</p>
              <p className="text-[5vw] mb-3">Set the mood you want</p>
              <div className="flex items-center justify-center">
                <Button
                  label={"Party"}
                  styling={
                    "text-[7vw] md:text-[8vw] bg-[#D0EE1A] text-[#7D53FF] px-7 rounded-full active:translate-y-[5px]"
                  }
                />
              </div>
            </li>
            <li className="mb-5">
              <p className="font-bold text-[6vw pt-4">Swipe</p>
              <p className="text-[5vw]">
                Left or right.<br></br>There's no right or wrong
              </p>
              <div
                ref={cardRef}
                className="flex items-center justify-center transform scale-75"
              >
                <div className="flex flex-col bg-gradient-to-b from-[#D0EE1A]/40 to-[#7D53FF] backdrop-blur-2xl border border-slate-700 rounded-[10px] shadow-2xl p-6">
                  <h3 className="font-bold text-[#D0EE1A] text-[6vw] py-12 text-center -mt-4">
                    Card
                  </h3>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <p className="font-bold text-[6vw]">Discuss</p>
              <p className="text-[5vw]">
                Get to know your friends and find out: is it only me?
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Modal;

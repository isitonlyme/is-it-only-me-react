import { useState, useEffect } from "react";
import Button from "./Button";

const Modal = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [show]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose();
    }, 500); // 500ms should match your scaleDown animation duration
  };

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
        <div className="mt-4 items-center justify-center flex flex-col">
          <h2 className="font-bold text-4xl tracking-wide text-[#D0EE1A]">
            How To Play
          </h2>
          <ol className="text-[#D0EE1A] text-2xl">
            <li className="mb-5">
              <p className="text-2xl">Pick Category</p>
              <p className="text-xl mb-2">
                To start, pick a category that fits your mood
              </p>
              <Button
                label={"Mixed"}
                styling={
                  "text-4xl md:text-6xl bg-[#D0EE1A] text-[#7D53FF] px-7 rounded-full active:translate-y-[5px]"
                }
              />
            </li>
            <li className="mb-5">
              <p className="font-bold text-2xl">Swipe</p>
              <p className=" text-xl">
                Swipe card to go to the next statement.
              </p>
              <img src="/src/assets/card.svg" width={100} />
            </li>
            <li className="mb-5">
              <p className="font-bold text-2xl">Discuss</p>
              <p className="text-xl">
                Discuss the statement and find out if any person agrees
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Modal;

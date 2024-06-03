import { useState, useEffect } from "react";

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
        className={`backdrop-blur-md bg-white/30 p-10 shadow-lg w-screen h-screen ${
          isClosing ? "animate-scaleDown" : "animate-scaleUp"
        }`}
      >
        <div className="flex justify-end">
          <button className="text-white" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="mt-4 items-center justify-center flex flex-col">
          <h2 className="font-bold uppercase text-4xl tracking-wide text-white">
            How To Play
          </h2>
          <ol className="text-white list-decimal ml-16 mr-5 mt-8 text-2xl">
            <li className="mb-5">
              <p className="font-bold text-2xl">Pick Category</p>
              <p className="font-thin text-xl">
                To start, pick a category that fits your mood
              </p>
            </li>
            <li className="mb-5">
              <p className="font-bold text-2xl">Swipe</p>
              <p className="font-thin text-xl">
                Swipe card to go to the next statement.
              </p>
            </li>
            <li className="mb-5">
              <p className="font-bold text-2xl">Discuss</p>
              <p className="font-thin text-xl">
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

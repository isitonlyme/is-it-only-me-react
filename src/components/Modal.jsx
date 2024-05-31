const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-custom-bg flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/30 p-6 rounded-xl shadow-lg w-4/5 max-h-lvh">
        <div className="flex justify-end">
          <button className="text-white" onClick={onClose}>
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
              <p className="font-thin text-xl">To start, pick a category that fits your mood</p>
            </li>
            <li className="mb-5">
              <p className="font-bold text-2xl">Swipe</p>
              <p className="font-thin text-xl">Swipe card to go to the next statement.</p>
            </li>
            <li className="mb-5">
              <p className="font-bold text-2xl">Discuss</p>
              <p className="font-thin text-xl">Discuss the statement and find out if any person agrees</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useGame } from "../context/GameContext";
import { Link } from "react-router-dom";

export default function CategoryPage({ label }) {
  const { chooseCategory } = useGame();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section className="flex flex-col justify-start items-center w-screen h-screen bg-gradient-to-bl">
      <h2 className="text-6xl text-center font-bold tracking-wide mt-32">
        Choose topic to play:
      </h2>
      <div className="flex flex-col justify-center items-center mt-10 text-xl">
        <Link
          className="uppercase text-white mb-5 font-regular text-4xl "
          to="/game"
          onClick={() => chooseCategory("mixed")}
        >
          Mixed
        </Link>
        <Link
          className="uppercase text-white mb-5 font-regular text-2xl"
          to="/game"
          onClick={() => chooseCategory("date")}
        >
          Date
        </Link>
        <Link
          className="uppercase text-white mb-5 font-regular text-2xl"
          to="/game"
          onClick={() => chooseCategory("party")}
        >
          Party
        </Link>
        <Link
          className="uppercase text-white mb-5 font-regular text-2xl"
          to="/game"
          onClick={() => chooseCategory("spicy")}
        >
          Spicy
        </Link>
      </div>
      <div className="absolute bottom-5 right-4">
        <Button
          label={"Home"}
          styling={
            " bg-[#e1f353] bottom-36 left-36 text-black rounded-[10px] shadow-xl mx-3"
          }
          link={"/"}
        />
        <Button
          label="How to play"
          onClick={toggleModal}
          styling={
            "bg-[#e1f353] bottom-36 left-36 text-black rounded-[10px] shadow-xl"
          }
        />
      </div>
      <Modal show={showModal} onClose={toggleModal} className="scaleUp"/>
    </section>
  );
}
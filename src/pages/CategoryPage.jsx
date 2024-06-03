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
    <section className="flex flex-col justify-start gap-12 items-center w-screen h-screen">
      <h3 className="mt-20 text-2xl border-2 border-[#D0EE1A] rounded-full px-4 text-[#D0EE1A]">
        Is it only me?
      </h3>
      <h2 className="text-6xl font-bold tracking-wide text-[#D0EE1A] text-center">
        Choose topic to discuss:
      </h2>
      <div className="flex flex-col justify-center items-center text-xl gap-2 font-bold">
        <Button
          label={"Mixed"}
          styling={"text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full"}
          onClick={() => chooseCategory("mixed")}
          link={"/game"}
        />
        <Button
          label={"Dating"}
          styling={"text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full"}
          onClick={() => chooseCategory("date")}
          link={"/game"}
        />
        <Button
          label={"Spicy"}
          styling={"text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full"}
          onClick={() => chooseCategory("spicy")}
          link={"/game"}
        />
        <Button
          label={"Party"}
          styling={"text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full"}
          onClick={() => chooseCategory("party")}
          link={"/game"}
        />
      </div>
      <div className="flex justify-center w-full p-4 gap-4">
        <Button
          label={"Home"}
          styling={"text-2xl bg-[#D0EE1A] text-[#7D53FF]"}
          link={"/"}
        />
        <Button
          label={"?"}
          styling={"text-2xl bg-[#D0EE1A] text-[#7D53FF]"}
          onClick={toggleModal}
        />
      </div>
      <Modal show={showModal} onClose={toggleModal} className="scaleUp" />
    </section>
  );
}

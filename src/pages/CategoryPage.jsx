import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useGame } from "../context/GameContext";
import PageTransitionLayout from "../PageTransitionLayout";

function CategoryPage() {
  const { chooseCategory } = useGame();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <PageTransitionLayout>
          <section className="flex flex-col justify-start gap-4 items-center w-screen h-screen p-4 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <Button 
        label={"Is it only me?"}
        styling={"text-2xl border-2 border-[#D0EE1A] rounded-full px-4 text-[#D0EE1A] py-0"}
        link={"/"}
        />
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-[#D0EE1A] text-center">
          Choose topic to discuss:
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center text-xl gap-4 font-bold">
        <Button
          label={"Mixed"}
          styling={"text-4xl md:text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full active:translate-y-[5px]"}
          onClick={() => chooseCategory("mixed")}
          link={"/game"}
        />
        <Button
          label={"Dating"}
          styling={"text-4xl md:text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full active:translate-y-[5px]"}
          onClick={() => chooseCategory("date")}
          link={"/game"}
        />
        <Button
          label={"Spicy"}
          styling={"text-4xl md:text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full active:translate-y-[5px]"}
          onClick={() => chooseCategory("spicy")}
          link={"/game"}
        />
        <Button
          label={"Party"}
          styling={"text-4xl md:text-6xl bg-[#D0EE1A] text-[#7D53FF] px-8 rounded-full active:translate-y-[5px]"}
          onClick={() => chooseCategory("party")}
          link={"/game"}
        />
      </div>
      <div className="flex justify-center w-full p-4 gap-4 mt-12">
        <Button
          label={"Home"}
          styling={"text-2xl bg-[#D0EE1A] text-[#7D53FF] font-bold active:translate-y-[5px]"}
          link={"/"}
        />
        <Button
          label={"?"}
          styling={"text-2xl bg-[#D0EE1A] text-[#7D53FF] px-6 font-bold active:translate-y-[5px]"}
          onClick={toggleModal}
        />
      </div>
      <Modal show={showModal} onClose={toggleModal} className="scaleUp" />
    </section>
    </PageTransitionLayout>
  );
}

export default CategoryPage;

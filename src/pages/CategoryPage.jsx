import Button from "../components/Button";
import { useGame } from "../context/GameContext";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { chooseCategory } = useGame();
  return (
    <section className="flex flex-col justify-start items-center w-screen h-screen">
      <h2 className="uppercase text-4xl tracking-wide mt-32">Categories</h2>
      <div className="flex flex-col justify-center items-center mt-10 text-xl">
        <Link to="/" onClick={() => chooseCategory("mixed")}>
          Mixed Edition
        </Link>
        <Link to="/" onClick={() => chooseCategory("date")}>
          Date Edition
        </Link>
        <Link to="/" onClick={() => chooseCategory("party")}>
          Party Edition
        </Link>
        <Link to="/" onClick={() => chooseCategory("spicy")}>
          Spicy Edition
        </Link>
      </div>
      <div className="absolute bottom-5 right-4">
        <Button label="How to play" />
      </div>
    </section>
  );
}

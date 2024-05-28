import CategoryLink from "../components/CategoryLink";
import Button from "../components/Button";

export default function CategoryPage({ categoryName, label }) {
  return (
    <section className="flex flex-col justify-start items-center w-screen h-screen">
      <h2 className="uppercase text-4xl tracking-wide mt-32">Categories</h2>
      <div className="flex flex-col justify-center items-center mt-10 text-xl">
        <CategoryLink categoryName="Mixed Edition" />
        <CategoryLink categoryName="Party Edition" />
        <CategoryLink categoryName="Date Edition" />
        <CategoryLink categoryName="Spicy Edition" />
      </div>
      <div className="absolute bottom-5 right-4">
        <Button label="How to play" />
      </div>
    </section>
  );
}

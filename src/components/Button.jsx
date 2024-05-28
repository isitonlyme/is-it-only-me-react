import { Link } from "react-router-dom";

export default function Button(props) {
  const { label, link } = props;

  return (
    <Link to={link}>
      <button className={`py-3 px-4 bg-black text-white rounded-full cursor-pointer`}>{label}</button>
    </Link>
  );
}

import { Link } from "react-router-dom";

export default function Button(props) {
  const { label, link, position } = props;

  return (
    <Link to={link}>
      <button className={`py-3 px-4 bg-black text-white rounded-full cursor-pointer ${position}`}>{label}</button>
    </Link>
  );
}

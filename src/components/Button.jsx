import { Link } from "react-router-dom";

export default function Button(props) {
  const { label, link, onClick, styling } = props;

  return (
    <Link to={link}>
      <button
        className={`py-3 px-4 rounded-[10px] cursor-pointer ${styling}`}
        onClick={onClick}
      >
        {label}
      </button>
    </Link>
  );
}

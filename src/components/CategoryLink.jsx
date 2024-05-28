import { Link } from "react-router-dom"

export default function CategoryLink({categoryName}) {

    return (
      <div className="">
        <Link to="/game">
            <p className="uppercase font my-2 tracking-wide cursor-pointer">{categoryName}</p>
        </Link>
      </div>
    )
  }
  
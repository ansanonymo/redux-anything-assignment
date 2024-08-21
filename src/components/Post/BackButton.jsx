import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div className="container mt-8">
      <Link
        to="/"
        className="text-gray-600 home-btn flex gap-2 py-1 px-3 items-center w-fit"
        id="lws-goHome"
      >
        <MdHome className="text-2xl" /> Go Home
      </Link>
    </div>
  );
}

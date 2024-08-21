import { PiGitlabLogoSimpleFill } from "react-icons/pi";

export default function Nav() {
  return (
    <nav className="py-4 border-b">
      <div className="navbar-container">
        {/* <!-- logo --> */}
        <div className="logo">
          <a
            to="/"
            className="text-3xl flex justify-center items-center hover:text-none"
          >
            <PiGitlabLogoSimpleFill />{" "}
            <span className="text-black">Blog Fox</span>
          </a>
        </div>
        {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
        <div className="auth-buttons">
          <button className="btn btn-primary">sign in</button>
          <button className="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  );
}

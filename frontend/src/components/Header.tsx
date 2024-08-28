import { NavLink } from "react-router-dom";
import { homeLinks } from "../utils/links";
import Logo from "./Logo";
import { MdClose, MdDarkMode, MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h-[var(--nav-height)] flex items-center justify-center p-2 shadow-[var(--shadow-1)] bg-[var(--background-secondary-color)] fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-full p-2 w-[var(--fluid-width)] max-w-[var(--max-width)] ">
        <Logo path="/" hideText={false} />
        <div className="flex gap-2">
          <nav className="flex gap-4 items-center max-[576px]:hidden">
            <button className="text-[2rem]">
              <MdDarkMode />
            </button>
            {homeLinks.map(({ text, path }) => (
              <NavLink
                className={`capitalize text-sm ${
                  text === "register" ? "btn btn-primary" : ""
                }`}
                key={text}
                to={path}
              >
                {text}
              </NavLink>
            ))}
          </nav>
          <button
            className="text-[2rem] min-[576px]:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

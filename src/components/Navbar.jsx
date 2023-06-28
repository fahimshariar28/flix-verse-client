import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  return (
    <div>
      <nav className="bg-black flex sticky top-0 h-24 w-full justify-between z-10 px-16 items-center ease-out duration-300">
        <div className="flex gap-8 items-center">
          <div className="brand flex items-center justify-center">
            <img className="h-16" src={logo} alt="Logo" />
          </div>
          <ul className=" lg:flex text-white no-underline gap-8 hidden">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className={`flex gap-2 items-center justify-center p-1 ${
              showSearch ? "show-search" : ""
            }`}
          >
            <button
              className="text-white"
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              className={`${
                showSearch
                  ? "border-white text-white bg-black-rgba w-full block p-1"
                  : "w-0 opacity-0 hidden ease-in-out duration-300 bg-transparent border-0 text-white focus:outline-0"
              }`}
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button className="text-red-600" onClick={() => logOut()}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

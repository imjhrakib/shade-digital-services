import React from "react";
import shadesLogo from "../../assets/shadesLogo.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Demos</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar shadow-sm md:px-7">
        <div className="navbar-start md:flex md:gap-12 items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={shadesLogo} alt="" />
          </a>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-5 font-medium text-gray-600">
              {links}
            </ul>
          </div>
        </div>

        <div className="navbar-end pr-10 md:pr-25">
          <button className="btn btn-outline text-[#258aff] border-[#258aff] border-2 hover:bg-[#258aff] hover:border-[#258aff] hover:text-white md:px-10">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

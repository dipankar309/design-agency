import Link from "next/link";
import React from "react";

export default function Nab() {
  return (
    <div className="navbar bg-transparent py-8 fixed z-10">
      <div className="container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>HOME</a>
              </li>
              <li tabIndex={0}>
                <a>ABOUT US</a>
              </li>
              <li>
                <a>COMPANY</a>
              </li>
              <li>
                <a>ADVANTAGES</a>
              </li>
              <li>
                <a href="">PROJECTS</a>
              </li>
              <li>
                <a href="">GET IN TOUCH</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Dot.Design</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-black p-0">
            <li>
              <a>HOME</a>
            </li>
            <li tabIndex={0}>
              <a>ABOUT US</a>
            </li>
            <li>
              <a>COMPANY</a>
            </li>
            <li>
              <a>ADVANTAGES</a>
            </li>
            <li>
              <a>PROJECTS</a>
            </li>
            <li>
              <a>GET IN TOUCH</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-x-5">
          <a className="btn btn-ghost">LOG IN</a>
          <a className="btn btn-ghost">SIGN IN</a>
        </div>
      </div>
    </div>
  );
}

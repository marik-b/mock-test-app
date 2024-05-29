import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavigationMenuDemo } from "./navlinks";
import { BsFillCartFill } from "react-icons/bs";

const navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-myWhite">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="p-0 text-2xl lg:hidden">
              <RxHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>Women</Link>
                <ul className="p-2">
                  <li>
                    <Link href={"/tops"}>Tops</Link>
                  </li>
                  <li>
                    <Link href={"/pants"}>Pants</Link>
                  </li>
                  <li>
                    <Link href={"/accessories"}>Accessories</Link>
                  </li>
                  <li>
                    <Link href={"/shoes"}>Shoes</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <p>Mock test task</p>
          </div>
        </div>
        <div className="navbar-end">
          <div className="block lg:hidden">
            <Image
              alt="logo"
              src={"/pictures/Logo.png"}
              width={300}
              height={100}
            />
          </div>
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;

"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Logo from "../public/assets/Group.svg";
import profile from "../public/assets/IMG_03999 1.png";
import Nav_Links from "./Nav_Links";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white h-[100px] px-8 lg:px-[40px] xl:px-[50px] w-screen max-w-[1440px] flex justify-between items-center border">
      <nav className="flex items-center justify-between lg:justify-start">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={Logo} width={30} height={30} alt="logo" />
            <h1 className="uppercase font-bold ml-2 text-3xl">
              Academy
            </h1>
          </Link>
          </div>
          {/* Display the burger menu icon for mobile */}
          <div className="lg:hidden ml-auto ">
            <SlMenu size="25" onClick={() => setOpen(!open)} />
          </div>
          {/* Display navigation links on larger screens */}
          <ul className="hidden h-full gap-8 lg:flex ml-8">
            <Nav_Links />
          </ul>
        </nav>

        {/* Search bar */}
        <div className="hidden lg:block lg:w-[300px] lg:h-[60px] bg-[#fafafa] w-full h-full py-4 px-3 lg:rounded-[6px] items-center gap-1">
          <div className="flex">
          <input
            type="text"
            placeholder="Search Anything"
            className="w-full h-full bg-[#fafafa] text-sm outline-none placeholder:text-[#bdbdbd]"
          />
          <FaSearch size="20" color="#bdbdbd" />
          </div>
        </div>

        {/* User profile section */}
        <div className="hidden lg:flex items-center ml-4">
          <div>
            <Image
              src={profile}
              width={50}
              height={50}
              alt="profile"
              className="rounded-md overflow-hidden"
            />
          </div>
          <div className="ml-2">
            <h3 className="text-sm font-semibold">Behzad Pashaei</h3>
            <p className="text-xs text-gray-25 mt-2">Ui & Ux Designer</p>
          </div>
        </div>

        {/* Bell icon */}
        <div className="hidden lg:block bg-gray-50 px-3 py-3 rounded-md overflow-hidden">
          <BsBellFill size="25" fill="#9e5cf2" />
        </div>
      </header>

      {/* Mobile navigation */}
      {open && (
        <ul className="lg:hidden fixed inset-0 bg-white z-50 ">
          <div className="flex justify-end p-4">
            <MdClose size="25" onClick={() => setOpen(false)} />
          </div>
          <Nav_Links />
        </ul>
      )}
    </>
  );
};

export default Navbar;



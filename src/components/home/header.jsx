"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="text-black body-font flex justify-center">
        <div className="flex p-4 max-w-[88rem] w-full justify-between md:justify-around items-center">
          <a className="flex title-font font-medium items-center ">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/images/logo.svg"
                fill
                className="object-contain"
                alt="icon"
              />
            </div>
            <span className="hidden md:block ml-3 text-2xl font-normal">
              Bot Kernel
            </span>
          </a>
          <nav className="hidden md:flex gap-5 flex-wrap items-center text-sm font-semibold">
            <Link href={"/"}>
              <h2 className="hover:text-[#99bf3e] cursor-pointer">Home</h2>
            </Link>
            <Link href={"/"}>
              {" "}
              <h2 className="hover:text-[#99bf3e] cursor-pointer">Product</h2>
            </Link>
            <Link href={"/cases"}>
              {" "}
              <h2 className="hover:text-[#99bf3e] cursor-pointer">Use Cases</h2>
            </Link>
            <Link href={"/"}>
              {" "}
              <h2 className="hover:text-[#99bf3e] cursor-pointer">
                Our Process
              </h2>
            </Link>
            <Link href={"/"}>
              {" "}
              <h2 className="hover:text-[#99bf3e] cursor-pointer">
                Contact Us
              </h2>
            </Link>
            <div className="relative w-[30px] h-[30px]">
              <Image
                src="/assets/icons/linkedin-icon.svg"
                fill
                className="object-contain"
                alt="icon"
              />
            </div>
            <button className="border px-4 rounded-[30px] font-semibold p-3 text-sm text-[#7c2a88] border-[#490852]">
              Book a meeting
            </button>
          </nav>
          <div className="block md:hidden">
            <Image
              src="assets/icons/toggle-icon.svg"
              width={32}
              height={32}
              alt="icon"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <div className="p-4 flex flex-col gap-4 items-center text-sm font-semibold">
          <a
            className="hover:text-[#99bf3e] cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            className="hover:text-[#99bf3e] cursor-pointer"
            onClick={toggleMenu}
          >
            Product
          </a>
          <a
            className="hover:text-[#99bf3e] cursor-pointer"
            onClick={toggleMenu}
          >
            Use Cases
          </a>
          <a
            className="hover:text-[#99bf3e] cursor-pointer"
            onClick={toggleMenu}
          >
            Our Process
          </a>
          <a
            className="hover:text-[#99bf3e] cursor-pointer"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
          <button
            className="border px-4 rounded-[30px] font-semibold p-3 text-sm text-[#7c2a88] border-[#490852]"
            onClick={toggleMenu}
          >
            Book a meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

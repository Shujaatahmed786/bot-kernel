"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HeroSection = ({
  heading,
  subheading,
  buttonText,
  bannerText,
  onButtonClick,
}) => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";

  return (
    <div className="bg-[#49264e] flex flex-col-reverse lg:flex-row items-center justify-center gap-20 md:gap-44 pt-10 md:pt-44 pb-10 md:pb-44">
      <div className="space-y-4 p-4">
        <div className="text-white">
          <p className="bg-white text-[9px] rounded-[30px] mb-8 font-semibold text-[#49264e] max-w-[8.5rem] p-1 px-2 w-full">
            {bannerText}
          </p>
          <h1 className="text-[40px] font-bold max-w-[20rem] w-full">
            {heading}
          </h1>
          <h2 className="max-w-[330px] w-full leading-[32px] mt-4 font-normal text-xs">
            {subheading}
          </h2>
        </div>
        <div>
          {!isContactPage && (
            <button
              className="text-white bg-[#a8ca55] text-xs font-bold py-[15px] px-[50px] mt-6 rounded-[30px]"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
      <div className="relative md:w-[25rem] md:h-[25rem] ">
        <Image
          src="assets/images/hero-img.svg"
          fill
          className="object-cover"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default HeroSection;

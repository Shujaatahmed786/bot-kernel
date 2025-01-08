import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div className="bg-[#090a25] px-24 p-16">
      <div className="flex flex-col  gap-4 text-white">
        <div>
          <a className="flex title-font font-medium  items-center text-gray-900 mb-4 md:mb-0">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/images/logo.svg"
                fill
                className="object-contain"
                alt="icon"
              />
            </div>
            <span className="ml-3 text-[26px] font-normal text-white">
              Bot Kernel
            </span>
          </a>
        </div>
        <div>
          <p className="max-w-60 w-full text-xs md:text-sm leading-normal">
            Hire the right team to bring your AI vision to life!
          </p>
        </div>
        <div>
          <p className="max-w-80 w-full text-xs md:text-sm leading-normal">
            Let Bot Kernel's experts guide you every step of the way. Take the
            guesswork out of application development and let us do what we do
            best!
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;

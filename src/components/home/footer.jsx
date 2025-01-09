import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div className="bg-[#090a25]  px-24 p-16">
      <div className="max-w-[55rem] mx-auto w-full">
        <div className="flex flex-col border-b pb-4 border-solid border-[#FFFFFF26]  items-center xl:items-start flex-wrap  xl:flex-wrap xl:flex-row justify-between">
          <div className="flex flex-col items-center xl:items-start gap-4 text-white">
            <div>
              <a className="flex title-font cursor-pointer font-medium  items-center text-gray-900 mb-4 md:mb-0">
                <div className="relative w-10 h-10">
                  <Image
                    src="/assets/images/logo.svg"
                    fill
                    className="object-contain"
                    alt="icon"
                  />
                </div>
                <span className="ml-3 text-[20px] font-normal text-[#D5D6EB]">
                  Bot Kernel
                </span>
              </a>
            </div>
            <div>
              <p className="max-w-52 w-full cursor-pointer text-[#D5D6EB] text-center xl:text-left text-[11px] leading-normal">
                Hire the right team to bring your AI vision to life!
              </p>
            </div>
            <div>
              <h3 className="max-w-44 w-full cursor-pointer text-[#D5D6EB] text-center xl:text-left text-[11px] leading-normal">
                Let Bot Kernel's experts guide you every step of the way. Take
                the guesswork out of application development and let us do what
                we do best!
              </h3>
            </div>
          </div>
          <div className="flex flex-col mt-14 md:mt-0 items-center xl:items-start gap-y-4 ">
            <h3 className="font-medium text-[#D5D6EB] text-base hidden xl:block cursor-pointer">
              Menu
            </h3>
            <h3 className="text-sm  text-white font-normal cursor-pointer">
              Home
            </h3>
            <h3 className="text-sm md:text-xs text-white font-normal cursor-pointer">
              AnalytiCam
            </h3>
            <h3 className="text-sm md:text-xs text-white font-normal cursor-pointer">
              InternalGPT AI
            </h3>
          </div>
          <div className="flex flex-col items-center xl:items-start justify-end gap-y-4 text-white mt-4 md:mt-10">
            <h3 className="text-sm md:text-xs font-normal cursor-pointer">
              Our Portfolio
            </h3>
            <h3 className="text-sm md:text-xs font-normal cursor-pointer">
              Our Process
            </h3>
            <h3 className="text-sm md:text-xs font-normal cursor-pointer">
              Contact Us
            </h3>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 items-center xl:items-start gap-y-4 text-white cursor-pointer">
            <h3 className="font-normal text-[#D5D6EB] text-base cursor-pointer">
              Contact
            </h3>
            <h3 className="text-sm md:text-xs font-normal cursor-pointer">
              Hello@botkernel.com
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between text-xs mt-4 text-white">
          <p>Copyright | Bot KernalInc.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default footer;

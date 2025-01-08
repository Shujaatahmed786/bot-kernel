import Image from "next/image";
import Header from "./header";

const heroSection = () => {
  return (
    <div className="bg-[#49264e] flex flex-col-reverse lg:flex-row items-center justify-center gap-20 md:gap-44  pt-10 md:pt-44 pb-10 md:pb-44 ">
      <div className="space-y-4 p-4">
        <div className="text-white">
          <p className="bg-white rounded-[30px] mb-8 font-semibold text-[#49264e] max-w-56 p-1 px-2 w-full">
            AI | WEB - ios - ANDROID
          </p>
          <h1 className="text-[40px] md:text-[55px] font-bold">
            Think Partner, <br />
            Not Agency
          </h1>
          <p className="max-w-[390px] w-full leading-[32px] mt-4 font-normal text-xs md:text-base">
            We implement AI based solutions for growing companies in Canada &
            USA. We are based in Toronto and ready to Make It App’n!®
          </p>
        </div>
        <div>
          <button className="text-white bg-[#a8ca55] text-sm md:text-lg font-bold py-[15px] px-[50px] mt-6 rounded-[30px]">
            Work With Us
          </button>
        </div>
      </div>
      <div className="relative w-[20rem] h-[20rem] md:w-[31rem] md:h-[31rem]">
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

export default heroSection;

import Image from "next/image";

const heroSection = () => {
  return (
    <div className="bg-[#49264e] flex items-center justify-center gap-44  pt-44 pb-44 ">
      <div className="space-y-4">
        <div className="text-white">
          <p className="bg-white rounded-[30px] mb-8 font-semibold text-[#49264e] max-w-56 p-1 px-2 w-full">
            AI | WEB - ios - ANDROID
          </p>
          <h1 className="text-[55px] font-bold">
            Think Partner, <br />
            Not Agency
          </h1>
          <p className="max-w-[390px] w-full leading-[32px] mt-4 font-normal text-base">
            We implement AI based solutions for growing companies in Canada &
            USA. We are based in Toronto and ready to Make It App’n!®
          </p>
        </div>
        <div>
          <button className="text-white bg-[#a8ca55] text-lg font-bold py-[15px] px-[50px] mt-6 rounded-[30px]">
            Work With Us
          </button>
        </div>
      </div>
      <div className="relative w-[31rem] h-[31rem]">
        <Image src="assets/images/hero-img.svg" fill className="object-cover" />
      </div>
    </div>
  );
};

export default heroSection;

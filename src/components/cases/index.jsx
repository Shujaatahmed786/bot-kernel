"use client";
import HeroSection from "@/src/shared/heroSection";
import {
  computerVision,
  developmentCases,
  naturalLanguageProcessing,
  predictiveAnalytics,
} from "@/src/data";
import { useState } from "react";

const Index = () => {
  const [selectedButton, setSelectedButton] = useState("computer vision");

  const getCardsData = () => {
    if (selectedButton === "web and mobile full stack development") {
      return developmentCases;
    } else if (selectedButton === "natural language processing") {
      return naturalLanguageProcessing;
    } else if (selectedButton === "predictive analytics") {
      return predictiveAnalytics;
    }
    return computerVision;
  };

  const cardsData = getCardsData();

  return (
    <div>
      <HeroSection
        heading="Use Cases"
        subheading="We’re our partner’s biggest fans. Check out some of the cool digital products we’ve built together!"
        buttonText="Work With us"
      />
      <div>
        <div>
          <h1
            className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2
            text-xs font-semibold max-w-12 mb-4 rounded-sm mt-8
            w-full"
          >
            Blog
          </h1>
          <h1 className="text-[#490852] font-bold leading-normal text-[32px] md:text-[48px] text-center">
            Use cases
          </h1>
          <h3 className="mt-4 p-4 text-center max-w-[55rem] mx-auto w-full text-2xl mb-14">
            We’re our partner’s biggest fans. Check out some of the cool digital
            products we’ve built together!
          </h3>
          <div className="flex justify-center">
            <div className="flex justify-around max-w-[75rem] mt-12 w-full items-center gap-4 mb-12">
              {[
                "Computer Vision",
                "Web and Mobile Full Stack Development",
                "Natural Language Processing",
                "Predictive Analytics",
              ].map((button, index) => (
                <button
                  key={index}
                  className={`px-3 py-4 md:px-4  text-[10px] md:text-xs lg:text-base rounded-t-lg font-semibold flex-shrink-0 ${
                    selectedButton === button.toLowerCase()
                      ? "bg-[#f3eaf4] text-black border-b-2 border-[#a8ca55]"
                      : "border text-[#9a9a9a] border-[#FFFFFF]"
                  }`}
                  onClick={() => setSelectedButton(button.toLowerCase())}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 md:px-[20rem] mb-44">
          {cardsData.map((item, idx) => (
            <div key={idx} className="p-4 border rounded-2xl mb-4 bg-[#fbfbfb]">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <span>
                <hr className="border-b-3 leading-[32px] mt-4 mb-4 border-solid border-2 border-[#a8ca55] max-w-14 w-full" />
              </span>
              <h3 className="text-lg">{item.para}</h3>
            </div>
          ))}
        </div>
      </div>
      <div
        className="min-h-[25rem] bg-cover bg-center flex flex-col items-center mt-4"
        style={{
          backgroundImage: "url('/assets/images/consultation-img.svg')",
        }}
      >
        <div className="mt-4 mb-4">
          <h1
            className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2
            text-xs font-semibold max-w-24  rounded-2xl
            w-full"
          >
            Consultation
          </h1>
        </div>
        <p className="text-white text-center text-4xl max-w-[40rem] mx-auto w-full">
          Are you looking to hire a team that can hit the ground running?
        </p>

        <p className="text-sm text-white mx-auto max-w-[43rem] w-full mt-14">
          During our free 45-minute consultation, we’ll discuss your needs and
          how we can best move forward together building your tech solution.
          It’s our goal for you to come out of this meeting together knowing
          more about your idea’s potential.
        </p>
        <div className="flex justify-center mt-8 mb-8">
          <button className="bg-[#a8ca55]  text-white px-12 py-4 rounded-[30px]">
            Book a meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;

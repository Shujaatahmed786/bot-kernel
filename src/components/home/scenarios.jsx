"use client";
import { use } from "@/src/data";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Scenarios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  useEffect(() => {
    const autoSlide = () => {
      const nextIndex = (currentIndex + 1) % use.length;
      setCurrentIndex(nextIndex);
    };

    const intervalId = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, use.length]);

  const getVisibleCards = () => {
    if (use.length <= visibleCards) {
      return use;
    }
    return [
      ...use.slice(currentIndex, currentIndex + visibleCards),
      ...use.slice(0, Math.max(0, currentIndex + visibleCards - use.length)),
    ];
  };

  const visibleItems = getVisibleCards();

  return (
    <div>
      <div>
        <h1
          className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2 text-xs font-semibold 
        max-w-14 mb-4 rounded-lg mt-44 w-full"
        >
          Blog
        </h1>
        <h2 className="text-[#490852] font-bold leading-normal text-[32px] xl:text-[48px] text-center">
          Use Cases
        </h2>
        <p className="font-normal mt-4  mx-auto text-center text-[20px] max-w-[45rem] w-full">
          We’re our partner’s biggest fans. Check out some of the cool digital
          products we’ve built together!
        </p>
      </div>
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-8">
          {visibleItems.map((cases, index) => (
            <div
              key={index}
              className={`border rounded-2xl flex flex-col bg-[#fcfcfc] max-w-full md:max-w-[20rem] w-full gap-2 p-4 items-center text-center cursor-pointer transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? "scale-110" : "scale-100"
              }`}
            >
              <div className="relative w-80 h-80">
                <Image
                  src={cases.src}
                  alt="icon"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="font-bold">{cases.title}</h1>
              <p>{cases.para}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-white font-bold text-lg leading-normal bg-[#a8ca55] rounded-[30px] mt-8 mb-2 px-12 py-4">
          See all use cases
        </button>
      </div>
    </div>
  );
};

export default Scenarios;

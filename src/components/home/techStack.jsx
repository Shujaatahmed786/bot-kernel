"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CarouselData = [
  { image: "/assets/images/icon.svg", alt: "icon" },
  { image: "/assets/images/python-logo.svg", alt: "icon" },
  { image: "/assets/images/icon.svg", alt: "icon" },
  { image: "/assets/images/mongoDB.svg", alt: "icon" },
];

const TechStack = () => {
  return (
    <div className="max-w-[40rem] w-full mx-auto mb-4">
      <Marquee>
        <div className="flex justify-between gap-40 items-center">
          {CarouselData.map((item, index) => (
            <div key={index} className="tech-item">
              <Image
                src={item.image}
                alt={`Tech stack image ${index}`}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TechStack;

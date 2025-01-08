import { serviceData } from "@/src/data";
import Image from "next/image";

const services = () => {
  return (
    <div>
      <div className="p-2">
        <h1
          className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2
           text-xs font-semibold max-w-32 mb-4  rounded-lg mt-24
    w-full"
        >
          We offer
        </h1>
        <h2 className="text-[#490852] font-bold leading-normal text-[32px] xl:text-[48px]  text-center">
          Our Services
        </h2>
        <p className="mt-4 text-center text-[20px] p-4 md:p-2">
          Learn more about our areas of expertise and see how our specialised
          services <br />
          can be applied to your business!
        </p>
      </div>
      <div
        className="flex justify-center p-4
      "
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[65rem] w-full mt-16">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col  items-center justify-between gap-4 border rounded-[20px] p-8"
            >
              {
                <Image
                  src={service.src}
                  alt={service.text}
                  width={85}
                  height={85}
                  className="mx-auto"
                />
              }
              <p className="text-black font-semibold text-base xl:text-2xl text-center">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default services;

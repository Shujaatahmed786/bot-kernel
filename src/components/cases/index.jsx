import HeroSection from "@/src/shared/heroSection";

const index = () => {
  return (
    <div>
      <HeroSection
        heading="Use Cases"
        subheading="We’re our partner’s biggest fans. Check out some of the cool digital products we’ve built together!"
        buttonText="Work With us"
      />
      <div>
        {" "}
        <div>
          <h1
            className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2
         text-xs font-semibold max-w-12 mb-4  rounded-sm mt-8
          w-full"
          >
            Blog
          </h1>
          <h1 className="text-[#490852] font-bold leading-normal text-[32px]   text-center">
            Use Cases
          </h1>
          <p className="mt-4 text-center max-w-[40rem] mx-auto  w-full text-base mb-14">
            We’re our partner’s biggest fans. Check out some of the cool digital
            products we’ve built together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;

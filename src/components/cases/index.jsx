import HeroSection from "@/src/shared/heroSection";
import { computerVision } from "@/src/data";

const Index = () => {
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
          <h1 className="text-[#490852] font-bold leading-normal text-[32px] text-center">
            Use Cases
          </h1>
          <p className="mt-4 text-center max-w-[40rem] mx-auto w-full text-base mb-14">
            We’re our partner’s biggest fans. Check out some of the cool digital
            products we’ve built together!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {computerVision.map((item, idx) => (
            <div key={idx} className="p-4 border rounded-lg mb-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

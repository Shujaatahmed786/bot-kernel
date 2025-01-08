import Image from "next/image";

const productsSection = () => {
  return (
    <div>
      <div>
        <h1
          className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2
         text-xs font-semibold max-w-32 mb-4  rounded-lg mt-8
          w-full"
        >
          What we propose
        </h1>
        <h2 className="text-[#490852] font-bold leading-normal text-[32px] xl:text-[48px]  text-center">
          Products
        </h2>
        <p className="mt-4 text-center text-[20px]">
          Take a look at our two state-of-the-art, in-house developed products!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-24 mb-4 p-4">
        <div className="border p-4 text-center  bg-[#fcfcfc] border-[#E6E5E5]">
          <div className="w-24 h-24 relative mx-auto mt-6">
            <Image
              src="/assets/icons/product-analytic.svg"
              fill
              className="object-contain"
              alt="icon"
            />
          </div>
          <h1 className="font-bold text-3xl mt-8 mb-8">AnalytiCam</h1>

          <p className="text-center mx-auto text-sm leading-[24px] xl:leading-[32px] max-w-[450px] mb-8 w-full">
            Maximize your live CCTV footage with AnalytiCam! Gain real-time
            insights using visual analytics, without any hardware upgrades.
            Automate alerts and enhance security!
          </p>
          <button>
            <u className="text-[#cb6dda] text-lg font-bold">Learn more</u>
          </button>
        </div>
        <div className="border p-4 text-center bg-[#fcfcfc] border-[#E6E5E5]">
          <div className="w-24 h-24 relative mx-auto mt-6 mb-4">
            <Image
              src="/assets/icons/product-gpt-icon.svg"
              fill
              className="object-contain"
              alt="icon"
            />
          </div>{" "}
          <h1 className="font-bold text-3xl mt-8 mb-8">InternalGPT AI</h1>
          <p className="text-center mx-auto text-sm leading-[24px] mt-4 xl:leading-[32px] max-w-[450px] mb-8 w-full">
            Analyse & understand your data with powerful LLM that provides
            insightful recommendations to improve your business processes &
            decision-making.
          </p>
          <button className="mb-16">
            <u className="text-[#cb6dda] text-lg font-bold ">Learn more</u>
          </button>
        </div>
      </div>
    </div>
  );
};

export default productsSection;

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
        <h2 className="text-[#490852] font-bold leading-normal text-4xl  text-center">
          Products
        </h2>
        <p className="mt-4 text-center text-[20px]">
          Take a look at our two state-of-the-art, in-house developed products!
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-24">
        <div className="border  text-center space-y-4 bg-[#fcfcfc] border-[#E6E5E5]">
          <h1 className="font-bold text-3xl">AnalytiCam</h1>

          <p className="text-center mx-auto text-base leading-[24px] xl:leading-[32px] max-w-[450px] w-full">
            Maximize your live CCTV footage with AnalytiCam! Gain real-time
            insights using visual analytics, without any hardware upgrades.
            Automate alerts and enhance security!
          </p>
          <button>
            <ul>Learn more</ul>
          </button>
        </div>
        <div className="border  text-center space-y-4 bg-[#fcfcfc] border-[#E6E5E5]">
          <h1 className="font-bold text-3xl">AnalytiCam</h1>

          <p className="text-center mx-auto text-base leading-[24px] xl:leading-[32px] max-w-[450px] w-full">
            Maximize your live CCTV footage with AnalytiCam! Gain real-time
            insights using visual analytics, without any hardware upgrades.
            Automate alerts and enhance security!
          </p>
          <button>
            <ul>Learn more</ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default productsSection;

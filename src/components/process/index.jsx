import HeroSection from "@/src/shared/heroSection";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <div>
        <HeroSection
          heading="Our Process"
          subheading="We believe our partners’ success is our success. How do we turn your idea into a scalable, marketable, and profitable digital product? It’s a journey that starts with our very first Zoom. Over many years, we have honed our methodology to what we know not only guarantees a successful app launch—but puts you on the path for long-term success."
          buttonText="Work With us"
        />
      </div>
      <div className="w-full ">
        <div className="flex justify-center">
          <div className="max-w-[30rem] w-full relative">
            <Image
              src="/assets/icons/process1.svg"
              width={124}
              height={124}
              alt="icon"
              className="border flex justify-end"
            />
            <h1 className="font-bold text-xl">Discovery & Documentation</h1>
            <span>
              <hr className="border-b-3 leading-[32px] mt-4 mb-4 border-solid border-2 border-[#a8ca55] max-w-14 w-full" />
            </span>
            <p className="max-w-[75rem] w-full">
              We carefully scope out your digital product from start-to-finish
              by defining all of the design and development requirements. This
              part of our process is very collaborative, and it happens before
              any contract is signed. We want to ensure you feel 100% confident
              before moving forward with us, and that you’ll receive everything
              you’ve asked for — and the things you didn’t know to ask for.
              We’ll work with you to optimize your budget and timeline based on
              the features and functionality that are most important to bring
              your idea to life. Everything we lay out together here sets the
              stage for Phase Two.
            </p>
            <div class="xl:block hidden absolute h-[500px] w-[12px] bg-[#F5F5F5] transform rotate-[120deg] right-[-140px] top-[-54px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

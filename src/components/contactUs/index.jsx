import HeroSection from "@/src/shared/heroSection";
import Form from "./form";

const index = () => {
  return (
    <div>
      <div>
        <HeroSection
          heading="Lets talk"
          subheading="About Building your dream App Together"
          bannerText="Contact us"
        />
        <Form />
      </div>
    </div>
  );
};

export default index;

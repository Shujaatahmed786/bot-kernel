import Header from "./header";
// import HeroSection from "./heroSection";
import ProductsSection from "./productsSection";
import Services from "./services";
import Scenarios from "./scenarios";
import Team from "./team";
import Footer from "./footer";
import TechStack from "./techStack";
import HeroSections from "@/src/shared/heroSection";

const index = () => {
  return (
    <div>
      <div>
        <HeroSections
          heading="Think Partner, Not Agency"
          subheading="We implement AI-based solutions for growing companies in Canada & USA. We are based in Toronto and ready to Make It App’n!®"
          buttonText="Work With us"
          bannerText="AI | WEB - iOS - ANDROID"
        />
        <ProductsSection />
        <Services />
        <Scenarios />
        <Team />
        <TechStack />
      </div>
    </div>
  );
};

export default index;

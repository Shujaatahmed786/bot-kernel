import Header from "./header";
import HeroSection from "./heroSection";
import ProductsSection from "./productsSection";
import Services from "./services";
import Scenarios from "./scenarios";
import Team from "./team";
import Footer from "./footer";

const index = () => {
  return (
    <div>
      <div>
        <Header />
        <HeroSection />
        <ProductsSection />
        <Services />
        <Scenarios />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default index;

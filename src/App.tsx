

import Banner from "./components/Banner";
import BrandsCarousel from "./components/BrandsCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/PartnerCard/PartnerCard";
 import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <BrandsCarousel />
      <ProductList />

      <div className="partners-container">
        <Partners
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
          imageUrl="/assets/img/banner-partner.png"
        />
        <Partners
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
          imageUrl="/assets/img/banner-partner.png"
        />
      </div>

      <Footer />
    </>
  );
}

export default App;

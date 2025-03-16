import { useEffect, useState } from "react";
import "./BrandsCarousel.scss";
import brandsData from "../../data/brands.json";
import BrandLogo from "../BrandLogo";

interface Brand {
  image: string;
  name: string;
}

const BrandsCarousel = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    setBrands(brandsData.brands);
  }, []);

  return (
    <section className="brands-carousel">
      <div className="brands-container">
        {brands.map((brand, index) => (
          <BrandLogo key={index} image={brand.image} name={brand.name} />
        ))}
      </div>
    </section>
  );
};

export default BrandsCarousel;
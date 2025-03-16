// import { useEffect, useState } from "react";
// import "./BrandsCarousel.scss";
// import brandsData from "../../data/brands.json"

// const BrandsCarousel = () => {
//   const [brands, setBrands] = useState<string[]>([]);

//   useEffect(() => {
//     setBrands(brandsData.brands);
//   }, []);

//   return (
//     <section className="brands-carousel">
//       <h2>Nossas Marcas</h2>
//       <div className="brands-container">
//         {brands.map((brand, index) => (
//           <img key={index} src={brand} alt={`Marca ${index}`} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BrandsCarousel;
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
import "./BrandGrid.scss";

const brands = [
  {
    name: "eConverse",
    logo: "/assets/icons/logo-econverse.png",
  },
  {
    name: "eConverse",
    logo: "/assets/icons/logo-econverse.png",
  },
  {
    name: "eConverse",
    logo: "/assets/icons/logo-econverse.png",
  },
  {
    name: "eConverse",
    logo: "/assets/icons/logo-econverse.png",
  },
  {
    name: "eConverse",
    logo: "/assets/icons/logo-econverse.png",
  },
];


const BrandsGrid = () => {
  return (
    <section className="brands-grid">
      <h2 className="brands-grid__title">Navegue por marcas</h2>
      <div className="brands-grid__container">
        {brands.map((brand, index) => (
          <div key={index} className="brands-grid__item">
            <img
              src={brand.logo}
              alt={brand.name}
              className="brands-grid__logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsGrid;

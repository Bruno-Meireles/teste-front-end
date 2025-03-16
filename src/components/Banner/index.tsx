import "./Banner.scss";
import bannerImage from "../../assets/img/banner.png";

const Banner = () => {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Banner Principal" />
      <div className="banner__text">
        <h1>Venha conhecer nossas promoções</h1>
              <p>50% Off nos produtos </p>
              <button>Ver produto</button>
      </div>
    </section>
  );
};

export default Banner;

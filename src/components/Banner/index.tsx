import "./Banner.scss";
import bannerImage from "../../assets/img/banner.png";
import Button from "../ui/Button/Button";

const Banner = () => {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Banner Principal" />
      <div className="banner__text">
        <h1>Venha conhecer nossas promoções</h1>
        <div className="banner__discount">
          <p className="banner__discount-text">50% Off</p>
          <span className="banner__discount-span">nos produtos</span>
        </div>

        <Button text="Ver produto" onClick={() => {}}></Button>
      </div>
    </section>
  );
};

export default Banner;

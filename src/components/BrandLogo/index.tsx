import "./BrandLogo.scss";

interface BrandLogoProps {
  image: string;
  name: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ image, name }) => {
  return (
    <div className="brand-logo-container">
      <div className="brand-logo">
        <img className="brand-logo__image" src={image} alt={name} />
      </div>
      <p className="brand-logo__text">{name}</p>
    </div>
  );
};

export default BrandLogo;

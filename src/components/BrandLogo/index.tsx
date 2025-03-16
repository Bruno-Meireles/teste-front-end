interface BrandLogoProps {
  image: string;
  name: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ image, name }) => {
  return (
    <div className="brand-logo">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default BrandLogo;

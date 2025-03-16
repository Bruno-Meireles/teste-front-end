
import Button from "../ui/Button/Button";
import "./PartnerCard.scss"

interface PartnersProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const Partners: React.FC<PartnersProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="partners">
      <img src={imageUrl} alt={title} className="partners__image" />
      <div className="partners__content">
        <h2 className="partners__title">{title}</h2>
        <p className="partners__description">{description}</p>
              <Button text={buttonText} onClick={() => {}}></Button>
      </div>
    </div>
  );
};

export default Partners;

import { ProductType } from "../../types/Product";
import Button from "../ui/Button/Button";
import "./ProductCard.scss";

interface ProductCardProps {
  product: ProductType;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div>
        <img src={product.photo} alt={product.productName} />
        <h3>{product.productName}</h3>
        <p>{product.descriptionShort}</p>
        <p className="product-card__old-price">R$ {product.oldPrice}</p>
        <p className="product-card__price">R$ {product.price}</p>
        <p className="product-card__installments">
          ou {product.installments}x de R$ {product.installmentValue} sem juros
        </p>
        <p className="product-card__free-shipping">Frete grátis</p>
          <Button text="Comprar" onClick={() => {}}></Button>
      </div>
    </div>
  );
};

export default ProductCard;

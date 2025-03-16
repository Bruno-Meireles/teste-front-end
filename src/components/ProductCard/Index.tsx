import { ProductType } from "../../types/Product";
import "./ProductCard.scss";

interface ProductCardProps {
  product: ProductType;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.photo} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.descriptionShort}</p>
      <p className="product-card__price">R$ {product.price}</p>
    </div>
  );
};

export default ProductCard;

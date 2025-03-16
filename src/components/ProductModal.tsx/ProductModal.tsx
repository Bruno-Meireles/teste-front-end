import { useState } from "react";
import { ProductType } from "../../types/Product";
import "./ProductModal.scss";
import Button from "../ui/Button/Button";

interface ProductModalProps {
  product: ProductType;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-container">
          <img
            src={product.photo}
            alt={product.productName}
            className="modal__image"
          />
          <div className="modal-content">
            <h3 className="modal__title">{product.productName}</h3>
            <p className="modal__price">R$ {product.price}</p>
            <p className="modal__description">{product.descriptionShort}</p>
            <a href="#" className="modal__details">
              Veja mais detalhes do produto &gt;
            </a>
            <div className="modal__actions">
              <div className="quantity-selector">
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
              </div>
              <Button text="COMPRAR" onClick={() => {}}></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;

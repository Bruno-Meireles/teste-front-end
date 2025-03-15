import React from "react";
import { ProductType } from "../../types/Product";


interface ProductModalProps {
  product: ProductType;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={product.photo} alt={product.productName} />
        <h3>{product.productName}</h3>
        <p>{product.descriptionShort}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;

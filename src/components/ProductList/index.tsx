import { ProductType } from "../../types/Product";
import productData from "../../data/produtos.json"; 
import { useEffect, useState } from "react";

const ProductList = () => {

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <img src={product.photo} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.descriptionShort}</p>
            <p>Price: {product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

// import { ProductType } from "../../types/Product";
// import productData from "../../data/produtos.json";
// import { useEffect, useState } from "react";

// const ProductList = () => {

//   const [products, setProducts] = useState<ProductType[]>([]);

//   useEffect(() => {
//     setProducts(productData.products);
//   }, []);

//   return (
//     <>
//       {products.map((product, index) => {
//         return (
//           <div key={index}>
//             <img src={product.photo} alt={product.productName} />
//             <h3>{product.productName}</h3>
//             <p>{product.descriptionShort}</p>
//             <p>Price: {product.price}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default ProductList;

import { useState, useEffect } from "react";
import { ProductType } from "../../types/Product";
import productData from "../../data/produtos.json";

// import ProductModal from "../ProductModal";

import ProductCard from "../ProductCard/Index";
import ProductModal from "../ProductModal.tsx/ProductModal";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onClick={() => setSelectedProduct(product)}
        />
      ))}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;

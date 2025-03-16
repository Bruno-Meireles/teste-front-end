import { useState, useEffect } from "react";
import { ProductType } from "../../types/Product";
import productData from "../../data/produtos.json";
import ProductCard from "../ProductCard/Index";
import ProductModal from "../ProductModal.tsx/ProductModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./ProductList.scss"

import "swiper/css";
import "swiper/css/navigation";
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
      <h2 className="product-list__title">Produtos Relacionados</h2>
      <Swiper modules={[Navigation]} slidesPerView={4} navigation loop={true}>
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

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

import { useState, useEffect } from "react";
import { ProductType } from "../../types/Product";
import productData from "../../data/produtos.json";
import ProductCard from "../ProductCard/Index";
import ProductModal from "../ProductModal.tsx/ProductModal";
import "./ProductList.scss";
import arrorRigth from "../../assets/icons/right-arrow.svg"
import arrorLeft from "../../assets/icons/left-arrow.svg";

const ProductList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    setProducts(productData.products);

    const updateProductsPerPage = () => {
      if (window.innerWidth < 480) {
        setProductsPerPage(1);
      } else if (window.innerWidth < 768) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
    };

    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);
    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  const nextSlide = () => {
    if (startIndex + productsPerPage < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="product-list">
      <h2 className="product-list__title">Produtos Relacionados</h2>
      <div className="product-list__container">
        <button className="arrow-button left" onClick={prevSlide}>
          <img src={arrorLeft} alt="Anterior" />
        </button>
        <div className="product-list__wrapper">
          {products
            .slice(startIndex, startIndex + productsPerPage)
            .map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
        </div>
        <button className="arrow-button right" onClick={nextSlide}>
          <img src={arrorRigth} alt="Próximo" />
        </button>
      </div>

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

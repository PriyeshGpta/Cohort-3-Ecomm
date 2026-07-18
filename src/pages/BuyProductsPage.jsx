import React from "react";
import { Minus, Plus } from "lucide-react";
import ProductCard from "../components/ProductCard";

const BuyProductsPage = ({ products, handleAddToCart, addToCartData }) => {
  const getProductQuantity = (productId) => {
    return addToCartData.get(productId);
  };

  if (products.length === 0)
    return <p className="text-3xl text-center">No Products</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          getProductQuantity={getProductQuantity}
        />
      ))}
    </div>
  );
};

export default BuyProductsPage;

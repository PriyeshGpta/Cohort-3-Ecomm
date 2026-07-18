import React from "react";
import { Minus, Plus } from "lucide-react";

const ProductsPage = ({ products, handleAddToCart, addToCartData }) => {
  const getProductQuantity = (productId) => {
    return addToCartData.get(productId);
  };

  if (products.length === 0)
    return <p className="text-3xl text-center">No Products</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          className="bg-gray-400 rounded-md p-3 flex flex-col justify-between"
          key={product.id}
        >
          <div>
            <img
              src={product.image}
              alt="Failed to load image"
              className="object-cover w-full rounded-lg mb-2 h-56"
            />
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          <div>
            {getProductQuantity(product.id) ? (
              <button className="w-full mt-2 px-4 py-2 rounded bg-green-500 cursor-pointer active:scale-98 transition-all duration-300">
                Added to Cart
              </button>
            ) : (
              <button
                className="w-full mt-2 px-4 py-2 rounded bg-yellow-500 cursor-pointer active:scale-98 transition-all duration-300"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;

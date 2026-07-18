import React from "react";

const ProductCard = ({ product, getProductQuantity, handleAddToCart }) => {
  return (
    <div className="bg-gray-400 rounded-md p-3 flex flex-col justify-between">
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
  );
};

export default ProductCard;

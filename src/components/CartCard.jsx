import React from "react";

const CartCard = ({
  product,
  handleRemoveOneFromCart,
  handleAddToCart,
  handleDeleteFromCart,
}) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-gray-400 p-5 shadow-md md:flex-row">
      <img
        src={product.image}
        alt={product.title}
        className="h-36 w-36 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h2 className="text-xl font-semibold">{product.title}</h2>

        <p className="mt-1">{product.description}</p>

        <p className="mt-4 text-2xl font-bold text-green-600">
          ₹{product.quantity * product.price}
        </p>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center rounded-lg border justify-between px-4 py-1">
          <button
            onClick={() => handleRemoveOneFromCart(product.id)}
            className="text-xl cursor-pointer hover:bg-gray-400"
          >
            −
          </button>

          <span className="w-10 text-center font-semibold">
            {product.quantity}
          </span>

          <button
            onClick={() => handleAddToCart(product.id)}
            className="text-xl cursor-pointer hover:bg-gray-400"
          >
            +
          </button>
        </div>

        <button
          onClick={() => handleDeleteFromCart(product.id)}
          className="cursor-pointer mt-4 text-red-500 border border-red-500 px-4 py-1 rounded hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;

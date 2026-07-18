import React from "react";
import CartCard from "../components/CartCard";

const CartPage = ({
  products,
  addToCartData,
  handleAddToCart,
  handleRemoveOneFromCart,
  handleDeleteFromCart,
}) => {
  const cartData = [...addToCartData].map(([id, quantity]) => {
    let productData = products.find((product) => {
      return id === product.id;
    });

    if(!productData) return null;

    return {...productData, quantity};
  }).filter(Boolean);

  const totalCartPrice = cartData.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  if (cartData?.length === 0)
    return <p className="text-3xl text-center">No items in Cart</p>;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-5 lg:col-span-2">
        {cartData.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            handleRemoveOneFromCart={handleRemoveOneFromCart}
            handleAddToCart={handleAddToCart}
            handleDeleteFromCart={handleDeleteFromCart}
          />
        ))}
      </div>

      <div className="h-fit rounded-xl bg-gray-400 p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>
        <div className="mb-3 flex justify-between">
          <span>Total Items</span>
          <span>{cartData.length}</span>
        </div>
        <div className="mb-6 flex justify-between text-lg font-semibold">
          <span>Total Amount</span>
          <span className="text-green-600">₹{totalCartPrice}</span>
        </div>
        <button className="w-full rounded-lg bg-blue-600 py-3 cursor-pointer font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

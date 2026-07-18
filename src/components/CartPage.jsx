import React from "react";

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
    productData.quantity = quantity;
    return productData;
  });

  const totalCartPrice = cartData.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  if (cartData?.length === 0)
    return <p className="text-3xl text-center">No items in Cart</p>;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-5 lg:col-span-2">
        {cartData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-5 rounded-xl bg-gray-400 p-5 shadow-md md:flex-row"
          >
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

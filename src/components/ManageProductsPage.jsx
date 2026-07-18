import React from "react";

const ManageProductsPage = ({ products, handleEdit, handleDelete }) => {
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

          <div className="flex justify-between mt-2">
            <button
              className="px-4 py-2 rounded bg-yellow-500 cursor-pointer hover:bg-yellow-400 active:scale-90 transition-all duration-300"
              onClick={() => handleEdit(product)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 rounded bg-red-900 text-white cursor-pointer hover:bg-red-800 active:scale-90 transition-all duration-300"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageProductsPage;

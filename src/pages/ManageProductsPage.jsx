import React from "react";
import ProductManagementCard from "../components/ProductManagementCard";

const ManageProductsPage = ({ products, handleEdit, handleDelete }) => {
  if (products.length === 0)
    return <p className="text-3xl text-center">No Products</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductManagementCard
          key={product.id}
          product={product}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ManageProductsPage;

import React from "react";
import ProductsForm from "../components/ProductsForm";

const CreateProductsPage = ({
  products,
  setProducts,
  setNavigateTo,
  editingProduct,
  setEditingProduct,
}) => {
  return (
    <ProductsForm
      products={products}
      setProducts={setProducts}
      setNavigateTo={setNavigateTo}
      editingProduct={editingProduct}
      setEditingProduct={setEditingProduct}
    />
  );
};

export default CreateProductsPage;

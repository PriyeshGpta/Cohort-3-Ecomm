import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductsForm from "./components/ProductsForm";
import ManageProductsPage from "./components/ManageProductsPage";
import { NAVIGATION } from "./constants/navigation";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";

function App() {
  const [navigateTo, setNavigateTo] = useState(NAVIGATION.GO_TO_PRODUCTS);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || [],
  );
  const [editingProduct, setEditingProduct] = useState(null);
  const [addToCartData, setAddToCartData] = useState(() => {
    let storedData = localStorage.getItem("cartData");
    if (storedData) {
      let obj = JSON.parse(storedData);
      let entries = Object.entries(obj);
      let map = new Map(entries);
      return map;
    } else return new Map();
  });

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNavigateTo(NAVIGATION.GO_TO_CREATE_PRODUCTS);
  };

  const handleDelete = (id) => {
    const filteredData = products.filter((product) => product.id !== id);
    setProducts(filteredData);
    localStorage.setItem("products", JSON.stringify(filteredData));
  };

  const handleAddToCart = (productId) => {
    setAddToCartData((prev) => {
      let updatedCartData = new Map(prev);
      updatedCartData.set(productId, (prev.get(productId) || 0) + 1);
      localStorage.setItem(
        "cartData",
        JSON.stringify(Object.fromEntries(updatedCartData)),
      );
      return updatedCartData;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setAddToCartData((prev) => {
      let updatedCartData = new Map(prev);
      let newCount = prev.get(productId) - 1;
      if (newCount) {
        updatedCartData.set(productId, newCount);
      } else {
        updatedCartData.delete(productId);
      }
      localStorage.setItem(
        "cartData",
        JSON.stringify(Object.fromEntries(updatedCartData)),
      );
      return updatedCartData;
    });
  };

  const renderContent = () => {
    if (navigateTo === NAVIGATION.GO_TO_PRODUCTS)
      return (
        <ProductsPage
          products={products}
          addToCartData={addToCartData}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      );
    else if (navigateTo === NAVIGATION.GO_TO_CART) return <CartPage />;
    else if (navigateTo === NAVIGATION.GO_TO_CREATE_PRODUCTS)
      return (
        <ProductsForm
          products={products}
          setProducts={setProducts}
          setNavigateTo={setNavigateTo}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
        />
      );
    else
      return (
        <ManageProductsPage
          products={products}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      );
  };

  return (
    <div className="min-h-screen p-4 bg-gray-700">
      <Navbar navigateTo={navigateTo} setNavigateTo={setNavigateTo} />
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;

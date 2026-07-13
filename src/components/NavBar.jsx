import React from "react";
import { NAVIGATION } from "../constants/navigation";

const NavBar = ({ navigateTo, setNavigateTo }) => {
  return (
    <nav className="bg-black py-4 text-white rounded-lg px-6 flex items-center justify-between mb-6">
      <img
        src="https://static.vecteezy.com/system/resources/previews/026/823/001/non_2x/survey-form-icon-icon-related-to-survey-line-icon-style-simple-design-editable-vector.jpg"
        alt="Logo"
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="flex gap-2">
        <button
          className={`${navigateTo === NAVIGATION.GO_TO_PRODUCTS ? "bg-green-800" : "bg-blue-800"} px-4 py-2 rounded-md cursor-pointer active:scale-90 transition-all duration-300 ease-in-out`}
          onClick={() => setNavigateTo(NAVIGATION.GO_TO_PRODUCTS)}
        >
          Buy Products
        </button>
        <button
          className={`${navigateTo === NAVIGATION.GO_TO_CART ? "bg-green-800" : "bg-blue-800"} px-4 py-2 rounded-md cursor-pointer active:scale-90 transition-all duration-300 ease-in-out`}
          onClick={() => setNavigateTo(NAVIGATION.GO_TO_CART)}
        >
          Cart
        </button>
        <button
          className={`${navigateTo === NAVIGATION.GO_TO_CREATE_PRODUCTS ? "bg-green-800" : "bg-blue-800"} px-4 py-2 rounded-md cursor-pointer active:scale-90 transition-all duration-300 ease-in-out`}
          onClick={() => setNavigateTo(NAVIGATION.GO_TO_CREATE_PRODUCTS)}
        >
          Create Products
        </button>
        <button
          className={`${navigateTo === NAVIGATION.GO_TO_MANAGE_PRODUCTS ? "bg-green-800" : "bg-blue-800"} px-4 py-2 rounded-md cursor-pointer active:scale-90 transition-all duration-300 ease-in-out`}
          onClick={() => setNavigateTo(NAVIGATION.GO_TO_MANAGE_PRODUCTS)}
        >
          Manage Products
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

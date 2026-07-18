import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { nanoid } from "nanoid";
import { NAVIGATION } from "../constants/navigation";

const ProductsForm = ({
  products,
  setProducts,
  setNavigateTo,
  editingProduct,
  setEditingProduct,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", defaultValues: editingProduct });

  const onFormSubmit = (data) => {
    if (editingProduct) {
      const updatedProducts = products.map((product) => {
        if (product.id === data.id) return data;
        else return product;
      });
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setEditingProduct(null);
    } else {
      const addProductData = [...products, { id: nanoid(), ...data }];
      setProducts(addProductData);
      localStorage.setItem("products", JSON.stringify(addProductData));
    }
    reset();
    setNavigateTo(NAVIGATION.GO_TO_MANAGE_PRODUCTS);
  };

  const onClose = () => {
    setNavigateTo(NAVIGATION.GO_TO_MANAGE_PRODUCTS);
    if (editingProduct) setEditingProduct(null);
  };

  return (
    <div className="bg-gray-500 p-4 rounded-lg w-full md:w-3/4 lg:w-1/2 xl:w-2/5 m-auto">
      <div className="flex justify-between items-start">
        <div />
        <h1 className="text-3xl font-[900] mb-4">Products Form</h1>
        <button className="cursor-pointer" onClick={onClose}>
          <X size={25} />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="form-group">
          <input
            {...register("title", { required: "Product's name is required" })}
            type="text"
            autoComplete="off"
            placeholder="Enter product's name"
            className="p-2 border border-black rounded-lg w-full"
          />
          {errors?.title?.message && (
            <p className="text-red-900">{errors.title.message}</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("price", {
              required: "Product's price is required",
              valueAsNumber: true,
            })}
            type="number"
            autoComplete="off"
            placeholder="Enter product's price"
            className="p-2 border border-black rounded-lg w-full"
          />
          {errors?.price?.message && (
            <p className="text-red-900">{errors.price.message}</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("description", {
              required: "Product's description is required",
            })}
            type="text"
            autoComplete="off"
            placeholder="Enter product's description"
            className="p-2 border border-black rounded-lg w-full"
          />
          {errors?.description?.message && (
            <p className="text-red-900">{errors.description.message}</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("image", { required: "Product's image is required" })}
            type="url"
            autoComplete="off"
            placeholder="Enter product's image url"
            className="p-2 border border-black rounded-lg w-full"
          />
          {errors?.image?.message && (
            <p className="text-red-900">{errors.image.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg mt-6 w-1/2 self-center cursor-pointer hover:bg-blue-500 active:scale-90 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductsForm;

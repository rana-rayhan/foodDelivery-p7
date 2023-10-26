import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { ImageToBase64 } from "../../Utility/ImageToBase64";
import useProduct from "../../hooks/useProduct";

const Products = () => {
  const { addProduct } = useProduct();

  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    desc: "",
  });

  //
  // handle data
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(data);
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="m-auto w-full max-w-md flex flex-col shadow p-3 bg-white rounded"
      >
        <h1 className="flex items-center justify-center bg-red-500 text-white text-lg font-medium my-2 drop-shadow rounded">
          Add new product
        </h1>

        <label htmlFor="name">Name</label>
        <input
          onChange={handleData}
          type="text"
          name="name"
          className="my-1 py-1 bg-slate-200"
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          onChange={handleData}
          className="my-1 py-1 bg-slate-200"
          id="category"
        >
          <option>Select</option>
          <option>Fruits</option>
          <option>Vagetables</option>
          <option>Icecream</option>
          <option>Dosa</option>
          <option>Fast food</option>
          <option>Cake</option>
          <option>Pizza</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full cursor-pointer bg-slate-200 rounded flex items-center justify-center">
            {data.image ? (
              <img className="h-full" src={data.image && data.image} alt="" />
            ) : (
              <span className="text-5xl hover:text-red-600">
                <BiCloudUpload />
              </span>
            )}

            <input
              accept="image/*"
              type="file"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price">Price</label>
        <input
          name="price"
          onChange={handleData}
          type="text"
          className="my-1 py-1 bg-slate-200"
        />

        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          onChange={handleData}
          className="my-1 py-1 bg-slate-200 resize-none"
          rows="2"
        ></textarea>

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 rounded text-white text-lg font-medium my-2 drop-shadow"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Products;

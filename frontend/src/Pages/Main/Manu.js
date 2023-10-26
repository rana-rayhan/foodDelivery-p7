import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AllProduct from "../Products/AllProduct";
import { addCartItem } from "../../components/Redux/ProductSlice";

const Manu = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products);
  const productDisplay = products.filter((el) => el._id === location.state)[0];

  const handleCartItem = (id) => {
    dispatch(addCartItem(id));
  };

  return (
    <div className="p-2 md:p-4">
      {productDisplay ? (
        <div className="w-full max-w-4xl m-auto md:flex bg-white">
          <div className="max-w-sm  overflow-hidden w-full p-5">
            <img
              src={productDisplay.image}
              className="hover:scale-105 transition-all h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
              {productDisplay.name}
            </h3>
            <p className=" text-slate-500  font-medium text-2xl">
              {productDisplay.category}
            </p>
            <p className=" font-bold md:text-2xl">
              <span className="text-red-500 ">€</span>
              <span>{productDisplay.price}</span>
            </p>
            <div className="flex gap-3">
              <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">
                Buy
              </button>
              <button onClick={() => handleCartItem(productDisplay)} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">
                Add Cart
              </button>
            </div>
            <div>
              <p className="text-slate-600 font-medium">Description : </p>
              <p>{productDisplay.desc}</p>
            </div>
          </div>
        </div>
      ) : (
        <AllProduct heading={"Related Products"} />
      )}
      {productDisplay && <AllProduct heading={"Related Products"} />}
    </div>
  );
};

export default Manu;

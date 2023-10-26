import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deCartItem,
  deleteCartItem,
  inCartItem,
} from "../../components/Redux/ProductSlice";

const CartProduct = ({ product }) => {
  const { _id, name, category, qty, total, image, price } = product;

  const dispatch = useDispatch();

  return (
    <div className="flex p-2 bg-slate-200 gap-4 rounded border border-slate-300 ">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} alt="" className="h-28 w-40 object-cover" />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            onClick={() => dispatch(deleteCartItem(_id))}
            className="text-slate-700 hover:text-red-600 cursor-pointer text-xl"
          >
            <AiFillDelete />
          </div>
        </div>
        <p className=" text-slate-500  font-medium text-2xl">{category}</p>
        <p className=" font-bold text-base">
          <span className="text-red-500 ">€</span>
          <span>{price}</span>
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <button
              onClick={() => dispatch(inCartItem(_id))}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
            >
              <BiPlus />
            </button>
            <p className=" p-1 font-semibold">{qty}</p>
            <button
              onClick={() => dispatch(deCartItem(_id))}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
            >
              <BiMinus />
            </button>
          </div>

          <div className="flex items-center font-bold text-slate-700 gap-2">
            <p>Total : </p>
            <p>
              <span className="text-red-500 ">€</span> {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

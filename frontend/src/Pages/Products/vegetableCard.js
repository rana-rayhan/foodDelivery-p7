import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../../components/Redux/ProductSlice";

const VegetableCard = ({ product }) => {
  const { name, image, price, category, _id } = product;
  const dispatch = useDispatch();

  const handleCartItem = (product) => {
    dispatch(addCartItem(product));
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col">
      <Link to="/manu" state={_id}>
        <div className="h-28 flex flex-col justify-center items-center">
          <img src={image} alt="" className="h-full" />
        </div>

        <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <p className="text-slate-500  font-medium">{category}</p>
        <p className=" font-bold">
          {price} <span className="text-red-500"> €</span>
        </p>
        </Link>
        <button
          onClick={() => handleCartItem(product)}
          className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
        >
          Add Cart
        </button>
    </div>
  );
};

export default VegetableCard;

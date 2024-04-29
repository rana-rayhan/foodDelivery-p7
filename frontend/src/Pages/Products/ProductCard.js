import React from "react";

const ProductCard = ({ product, loading }) => {
  const { name, image, price, category } = product;

  return (
    <div className="bg-white shadow hover:shadow-lg p-2 rounded cursor-pointer">
      {image ? (
        <>
          <div className="w-40 h-40">
            <img src={image} alt="" className="w-full  rounded" />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalizz text-lg">
            {name}
          </h3>
          <p className=" text-slate-500 text-center text-medium">{category}</p>
          <p className=" text-center font-bold">
            {price} <span className="text-red-500"> €</span>
          </p>
        </>
      ) : (
        <p>{loading}</p>
      )}
    </div>
  );
};

export default ProductCard;

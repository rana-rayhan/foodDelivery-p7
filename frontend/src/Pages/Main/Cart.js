import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Products/CartProduct";

const Cart = () => {
  const { cartItem, isModalOpen, modalText } = useSelector(
    (state) => state.products
  );
  const totalPrice = cartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = cartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0);

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-500 ">
        Your Cart Items {isModalOpen && <p>{modalText}</p>}
      </h2>

      {/* Display cart item */}
      <div className="my-4 flex gap-3">
        <div className="w-full max-w-3xl">
          {cartItem.map((el, index) => (
            <CartProduct key={index} product={el} />
          ))}
        </div>
        {/* Total cart items */}
        {/* total cart item  */}
        <div className="w-full max-w-md  ml-auto">
          <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
          <div className="flex w-full py-2 text-lg border-b">
            <p>Total Qty :</p>
            <p className="ml-auto w-32 font-bold">
              <span className="text-red-500">=</span> {totalQty}
            </p>
          </div>
          <div className="flex w-full py-2 text-lg border-b">
            <p>Total Price</p>
            <p className="ml-auto w-32 font-bold">
              <span className="text-red-500">€</span> {totalPrice}
            </p>
          </div>
          <button className=" bg-red-400 w-full text-lg font-bold py-2 text-white">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

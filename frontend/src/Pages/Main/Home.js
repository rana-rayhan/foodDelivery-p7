import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import toast, { Toaster } from "react-hot-toast";

import { fetchProduct } from "../../components/Redux/ProductSlice";
import ProductCard from "../Products/ProductCard";
import VegetableCard from "../Products/vegetableCard";
import AllProduct from "../Products/AllProduct";

const Home = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);

  const productList = products.slice(1, 7);
  const vegeTableList = products.filter(
    (el) => el.category === "Vagetables",
    []
  );
  if (isLoading) {
    toast.success("Loading...", {
      duration: 4000,
      style: {
        color: "#000",
        fontSize: "25px",
        minWidth: "250px",
      },
    });
  } else {
    toast.dismiss();
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        {/* Left section */}
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900 ">Free Delivery</p>
            <img
              className="h-7"
              src="https://cdn-icons-png.flaticon.com/512/171/171253.png"
              alt=""
            />
          </div>

          <h2 className="text-4xl md:text-7xl py-4 font-bold">
            Fastest delivery in <span className="text-red-500">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            atque animi, perferendis modi fugit quidem temporibus iste
            explicabo, sunt minima soluta ipsum neque dicta totam laboriosam vel
            illum laborum non. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Molestiae voluptatibus harum aliquid reprehenderit
            repudiandae modi autem dignissimos corrupti error delectus,
            inventore perferendis qui temporibus quam doloribus eaque voluptatem
            nemo laboriosam.
          </p>
          <button className="font-bold rounded-md bg-red-500 text-slate-200 px-4 py-2">
            Order Now
          </button>
        </div>
        {/* Right section  product card*/}
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {error && <p className=" text-red-500 text-1xl">{error}</p>}
          {productList.map((el) => {
            return (
              <ProductCard product={el} loading={"Loading..."} key={el._id} />
            );
          })}
        </div>
      </div>
      {/* bottom section category */}
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          ref={slideProductRef}
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
        >
          {vegeTableList &&
            vegeTableList.map((el) => {
              return <VegetableCard product={el} key={el._id} />;
            })}
        </div>
      </div>
      <AllProduct heading={"Your Product"} />
      <Toaster />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";

import VegetableCard from "./vegetableCard";
import FilterProduct from "./FilterProduct";
import { useSelector } from "react-redux";

const AllProduct = ({ heading }) => {
  const { products } = useSelector((state) => state.products);

  const categoryList = [...new Set(products.map((el) => el.category))];
  const [dataFilter, setDataFilter] = useState([]);

  const handleProductByFliter = (category) => {
    const filterData = products.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filterData];
    });
  };

  useEffect(() => {
    setDataFilter(products);
  }, [products]);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>
      <div className="flex gap-4 mb-2 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] &&
          categoryList.map((el, index) => {
            return (
              <FilterProduct
                key={index}
                isActive={true}
                category={el}
                onClick={() => handleProductByFliter(el)}
              />
            );
          })}
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center rounded">
        {dataFilter[0] &&
          dataFilter.map((el) => {
            return <VegetableCard product={el} key={el._id} />;
          })}
      </div>
    </div>
  );
};

export default AllProduct;

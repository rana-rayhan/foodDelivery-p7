import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../components/Redux/ProductSlice";

const useProduct = (data) => {
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const addProduct = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    //user data
    const productData = await response.json();
    if (!response.ok) {
      setLoading(false);
      setError(productData.error);
      console.log(productData.error);
    }
    if (response.ok) {
      console.log(productData);

      dispatch(addNewProduct(productData));
      setLoading(false);
    }
  };

  return { isLoading, error, addProduct };
};
export default useProduct;

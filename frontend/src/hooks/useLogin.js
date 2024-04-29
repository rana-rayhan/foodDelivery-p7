import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../components/Redux/UserSlice";
import { baseUrl } from "../components/Redux/ProductSlice";

const useLogIn = () => {
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = async (data) => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    //user data
    const userData = await response.json();
    if (!response.ok) {
      setLoading(false);
      setError(userData.error);
    }
    if (response.ok) {
      dispatch(setUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      setTimeout(() => {
        navigate("/");
      }, 1000);

      setLoading(false);
    }
  };

  return { isLoading, error, userLogin };
};

export default useLogIn;

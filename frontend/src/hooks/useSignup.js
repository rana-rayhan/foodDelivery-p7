import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSingUp = () => {
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const singUp = async (data) => {
    setLoading(true);
    setError(null);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    //user data
    const userData = await response.json();
    if (!response.ok) {
      setLoading(false);
      setError(userData.error);
      navigate("/signup");
      console.log(userData.error);
    }
    if (response.ok) {
      //save data to local storage
      //   localStorage.setItem("user", JSON.stringify(userData));
      // dispatch action sor singup || login
      setLoading(false);
      navigate("/login");
    }
  };

  return { isLoading, error, singUp };
};

export default useSingUp;

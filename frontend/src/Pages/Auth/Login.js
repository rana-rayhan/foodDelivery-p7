import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

import loginSignup from "../../assest/login-animation.gif";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { error, userLogin, isLoading } = useLogin();
  // Getting user data
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // handle data
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(data);
  };

  //
  //handle show and hide password start----**
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  //handle show and hide password start----**

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignup} alt="" className="w-full " />
        </div>

        {/* form start */}
        <form onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
          <label htmlFor="email"> Email:</label>
          <input
            onChange={handleData}
            value={data.email}
            type="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1
            rounded focus-within:outline-blue-300"
          />

          <label htmlFor="password"> Password:</label>
          <div
            className="flex px-2py-1 py-1 px-2 bg-slate-200 rounded
          mt-1 mb-2 focus-within:outline focus-within:outline-blue-300"
          >
            <input
              onChange={handleData}
              value={data.password}
              type={showPass ? "text" : "password"}
              name="password"
              className="w-full  bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPass}
            >
              {showPass ? <BiShow /> : <BiHide />}
            </span>
          </div>

          {error && <span className="text-red-500 text-center"> {error}</span>}

          <button
            disabled={isLoading}
            type="submit"
            className="max-w-[120px] w-full bg-red-500 hover:bg-red-600
            cursor-pointer m-auto text-white py-1 rounded-full mt-4 text-center font-medium"
          >
            {isLoading ? "Login..." : "Login"}
          </button>
        </form>
        <p className="text-sm">
          Don't have account ?{" "}
          <Link
            to="/signup"
            className="text-red-600 underline cursor-pointer  font-bold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

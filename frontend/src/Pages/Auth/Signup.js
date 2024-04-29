import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

import loginSignup from "../../assest/login-animation.gif";
import { ImageToBase64 } from "../../Utility/ImageToBase64";
import useSingUp from "../../hooks/useSignup";

const Signup = () => {
  const { singUp, error, isLoading } = useSingUp();
  //
  // Getting user data
  const [data, setData] = useState({
    image: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //
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
  //
  // upload user profile
  const handleUploadProfile = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };
  //
  //
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, confirmPassword } = data;
    if (firstname && lastname && email && password && confirmPassword) {
      if (password === confirmPassword) {
        singUp(data);
      } else {
        console.log("Password is not match");
      }
    } else {
      console.log("Please input required value");
    }
  };

  //
  //handle show and hide password start----**
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  const handleShowConfirmPass = () => {
    setShowConfirmPass((prev) => !prev);
  };
  //handle show and hide password start----**

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>

        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img
            src={data.image ? data.image : loginSignup}
            alt=""
            className="w-full h-full "
            name="ryan"
          />

          <label htmlFor="profileimage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 opacity-60 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>

            <input
              type="file"
              accept="image/*"
              id="profileimage"
              onChange={handleUploadProfile}
              className="hidden"
            />
          </label>
        </div>

        {/* form start */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="w-full py-3 flex flex-col"
        >
          {" "}
          {error && (
            <p className="flex justify-center items-center text-red-600">
              {error}
            </p>
          )}
          <label htmlFor="firstname"> First Name:</label>
          <input
            onChange={handleData}
            value={data.firstname}
            type="text"
            name="firstname"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded
            focus-within:outline-blue-300"
          />
          <label htmlFor="lastname"> Last Name:</label>
          <input
            onChange={handleData}
            value={data.lastname}
            type="text"
            name="lastname"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded
            focus-within:outline-blue-300"
          />
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
          <label htmlFor="confirm_password">Confirm Password:</label>
          <div
            className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2
          focus-within:outline focus-within:outline-blue-300"
          >
            <input
              onChange={handleData}
              value={data.confirmPassword}
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPass}
            >
              {showConfirmPass ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="max-w-[120px] w-full bg-red-500 hover:bg-red-600
            cursor-pointer m-auto text-white py-1 rounded-full mt-4 text-center font-medium"
          >
            {isLoading ? "Signup..." : "Signup"}
          </button>
        </form>
        <p className="text-sm">
          Already have account ?{" "}
          <Link
            to="/login"
            className="text-red-600 underline cursor-pointer  font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

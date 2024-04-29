import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCartPlus, FaUserCircle } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/UserSlice";

const Headers = () => {
  const { cartItem } = useSelector((state) => state.products);
  const { users } = useSelector((state) => state.user);
  const [showMenu, setMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    dispatch(setUser());
  };

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to="/">
          <div className="h-10">
            <span className="h-full text-3xl text-orange-600 ml-2 font-bold">
              Fresh
            </span>
            <span className="ml-2 font-bold text-slate-500">vegetable</span>{" "}
          </div>
        </Link>
        {/* start cart & user logo */}
        <div className="flex items-center gap-4 md:gap-7 ">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link
              to="/"
              className={location.pathname === "/" ? "text-red-500" : ""}
            >
              Home
            </Link>
            <Link
              to="/manu"
              className={location.pathname === "/manu" ? "text-red-500" : ""}
            >
              Manu
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "text-red-500" : ""}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "text-red-500" : ""}
            >
              Contact
            </Link>
          </nav>

          <div className="text-2xl text-slate-600 cursor-pointer relative">
            <Link to="/cart">
              <FaCartPlus />
              <div className="absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                {cartItem.length}
              </div>
            </Link>
          </div>

          <div
            className="text-slate-600"
            onClick={() => setMenu((prev) => !prev)}
          >
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow">
              {users && users.image ? (
                <img src={users.image} alt="" />
              ) : (
                <FaUserCircle />
              )}
            </div>

            {showMenu && users && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[120px]">
                {users.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <div>
                    <Link
                      to="/new-product"
                      className="whitespace-nowrap cursor-pointer hover:text-orange-600"
                    >
                      New Products
                    </Link>

                    <Link
                      to="/users"
                      className="whitespace-nowrap cursor-pointer hover:text-orange-600 flex felx-col"
                    >
                      User List
                    </Link>
                  </div>
                )}

                {users.firstname ? (
                  <div>
                    <p
                      className="whitespace-nowrap cursor-pointer hover:text-orange-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                    <Link to="/profile" state={users && users}>
                      <p className="whitespace-nowrap cursor-pointer hover:text-orange-600">
                        Profile {users.firstname}
                      </p>{" "}
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="whitespace-nowrap cursor-pointer hover:text-orange-600"
                  >
                    Login
                  </Link>
                )}

                <nav className="flex flex-col md:text-lg text-base md:hidden mt-1 bg-slate-300">
                  <Link to="/" className="px-2 py-1 hover:text-yellow-500">
                    Home
                  </Link>
                  <Link to="/manu" className="px-2 py-1 hover:text-yellow-500">
                    Manu
                  </Link>
                  <Link to="/about" className="px-2 py-1 hover:text-yellow-500">
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="px-2 py-1 hover:text-yellow-500"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
        {/* end cart & user logo */}
      </div>

      {/* mobile */}
    </header>
  );
};

export default Headers;

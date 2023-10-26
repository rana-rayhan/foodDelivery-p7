import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Heders from "./components/Layouts/Heders";
import Home from "./Pages/Main/Home";
import Manu from "./Pages/Main/Manu";
import About from "./Pages/Main/About";
import Contact from "./Pages/Main/Contact";
import Error from "./Pages/Main/Error";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Users from "./Pages/Auth/Users";
import SingleUser from "./Pages/Auth/SingleUser";
import EditUser from "./Pages/Auth/EditUser";
import Profile from "./Pages/Auth/Profile";
import Cart from "./Pages/Main/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Heders />
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Routes>
          {/* <div className="pt-16"></div>-- */}
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/manu" element={<Manu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-product" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/singleUser" element={<SingleUser />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

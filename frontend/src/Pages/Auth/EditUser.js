import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const location = useLocation();
  const user = location.state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/user/${user._id}`,
      formData
    );
    navigate("/users");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="border px-4 py-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="border px-4 py-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border px-4 py-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;

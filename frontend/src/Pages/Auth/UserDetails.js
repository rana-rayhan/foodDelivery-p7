import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteUser } from "../../components/Redux/viewUserSlice";

const UserDetails = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    dispatch(deleteUser(id));
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/user/${id}`);
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <span>{user.firstname}</span>
        </div>
        <div>
          <span>{user.lastname}</span>
        </div>
        <div>
          <span>{user.email}</span>
        </div>
        <div>
          <Link to="/singleUser" state={user}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              View
            </button>
          </Link>
          <Link to="/edituser" state={user}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(user._id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

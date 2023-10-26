import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../components/Redux/viewUserSlice";
import UserDetails from "./UserDetails";

const Users = () => {
  const { viewUser, isLoading, error } = useSelector((state) => state.viewUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      <div className="flex justify-between font-bold bg-gray-300 p-2">
        <h3 className="w-1/4">First Name</h3>
        <h3 className="w-1/4">Last Name</h3>
        <h3 className="w-1/4">Email</h3>
        <h3 className="w-1/4">Actions</h3>
      </div>
      <div>
        {viewUser &&
          viewUser.map((user) => <UserDetails user={user} key={user._id} />)}
      </div>
    </div>
  );
};

export default Users;

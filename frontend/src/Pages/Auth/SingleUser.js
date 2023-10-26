import React from "react";
import { useLocation, Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const SingleUser = () => {
  const location = useLocation();
  const user = location.state;

  const createdAt = formatDistanceToNow(new Date(user.createdAt), {
    addSuffix: true,
  });

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Field</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">First Name</td>
            <td className="border px-4 py-2">{user.firstname}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Last Name</td>
            <td className="border px-4 py-2">{user.lastname}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Email</td>
            <td className="border px-4 py-2">{user.email}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Created At</td>
            <td className="border px-4 py-2">{createdAt}</td>
          </tr>
          {/* Add more rows for other fields */}
        </tbody>
      </table>

      <Link to="/edituser" state={user}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default SingleUser;

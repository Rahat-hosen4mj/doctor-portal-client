import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://doctor-server-side-six.vercel.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You cant make admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Make admin successfully");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={() => makeAdmin()} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>Blue</td>
    </tr>
  );
};

export default UserRow;

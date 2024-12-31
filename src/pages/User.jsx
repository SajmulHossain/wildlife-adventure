import { useState } from "react";
import { CiViewList } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);

  const handleDeleteUser = (id) => {
    const remainingUser = users.filter((user) => user._id !== id);

    fetch(`https://server-gamma-flame.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          setUsers(remainingUser);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td className="px-3">{user.name}</td>
                <td className="px-3">{user.email}</td>
                <td className="px-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      title="Delete User"
                    >
                      <MdDeleteOutline />
                    </button>
                    <button title="Edit User">
                      <FaUserEdit />
                    </button>
                    <button title="View User Details">
                      <CiViewList />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;

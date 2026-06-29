// src/components/admin/UserTable.jsx

import { Pencil, Trash2, User } from "lucide-react";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="border-b">
            <tr className="text-gray-600 text-lg">

              <th className="text-left px-6 py-5">
                User
              </th>

              <th className="text-left px-6 py-5">
                Username
              </th>

              <th className="text-left px-6 py-5">
                Email
              </th>

              <th className="text-center px-6 py-5">
                Role
              </th>

              <th className="text-center px-6 py-5">
                Status
              </th>

              <th className="text-center px-6 py-5">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="py-12 text-center text-gray-400 text-lg"
                >
                  No Users Found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-pink-50 transition"
                >
                  {/* User */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                        <User
                          size={28}
                          className="text-pink-600"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg">
                          {user.fullName}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          {user.email}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Username */}

                  <td className="px-6 py-5 font-medium">
                    @{user.username}
                  </td>

                  {/* Email */}

                  <td className="px-6 py-5">
                    {user.email}
                  </td>

                  {/* Role */}

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold
                      ${
                        user.role === "admin"
                          ? "bg-pink-100 text-pink-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {user.role || "User"}
                    </span>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5 text-center">

                    <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-4">

                      <button
                        onClick={() => onEdit(user)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Pencil size={22} />
                      </button>

                      <button
                        onClick={() => onDelete(user.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={22} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default UserTable;
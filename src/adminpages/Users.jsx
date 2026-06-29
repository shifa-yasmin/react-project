import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import UserSearch from "../components/admin/UserSearch";
import UserFilter from "../components/admin/UserFilter";
import UserTable from "../components/admin/UserTable";
import UserModal from "../components/admin/UserModal";
import Pagination from "../components/admin/Pagination";
import {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../features/userSlice";

// import {
//   setUsers,
//   addUser,
//   updateUser,
//   deleteUser,
// } from "../features/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      dispatch(setUsers(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async (user) => {
    try {
      if (editUser) {
        const res = await axios.put(
          `http://localhost:3000/users/${editUser.id}`,
          {
            ...user,
            id: editUser.id,
          }
        );

        dispatch(updateUser(res.data));
      } else {
        const res = await axios.post(
          "http://localhost:3000/users",
          user
        );

        dispatch(addUser(res.data));
      }

      setOpen(false);
      setEditUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this user?");

    if (!ok) return;

    try {
      await axios.delete(
        `http://localhost:3000/users/${id}`
      );

      dispatch(deleteUser(id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setOpen(true);
  };

  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.fullName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      user.username
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchRole =
      role === "All" ||
      (user.role || "user") === role;

    return matchSearch && matchRole;
  });

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = filteredUsers.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  const totalUsers = users.length;
  const adminCount = users.filter(
    (u) => u.role === "admin"
  ).length;
  const customerCount = totalUsers - adminCount;

  return (
    <div className="flex bg-pink-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64 p-6">
        <Header />

        <div className="flex justify-between items-center mt-6">
          <div>
            <h1 className="text-4xl font-bold text-pink-600">
              Users
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all registered users
            </p>
          </div>

          <button
            onClick={() => {
              setEditUser(null);
              setOpen(true);
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow"
          >
            + Add User
          </button>
        </div>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-4 gap-5 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500 text-sm">
              Total Users
            </h3>

            <h2 className="text-3xl font-bold text-pink-600 mt-2">
              {totalUsers}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500 text-sm">
              Admins
            </h3>

            <h2 className="text-3xl font-bold text-pink-600 mt-2">
              {adminCount}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500 text-sm">
              Customers
            </h3>

            <h2 className="text-3xl font-bold text-pink-600 mt-2">
              {customerCount}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500 text-sm">
              Active
            </h3>

            <h2 className="text-3xl font-bold text-green-500 mt-2">
              {totalUsers}
            </h2>
          </div>
        </div>

        {/* Search */}

        <div className="flex justify-between items-center my-8">
          <UserSearch
            search={search}
            setSearch={setSearch}
          />

          <UserFilter
            role={role}
            setRole={setRole}
          />
        </div>

        {/* Table */}

        <UserTable
          users={currentUsers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        {/* Modal */}

        <UserModal
          open={open}
          onClose={() => {
            setOpen(false);
            setEditUser(null);
          }}
          onSave={handleSave}
          editUser={editUser}
        />
      </div>
    </div>
  );
};

export default Users;
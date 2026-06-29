// src/components/admin/UserModal.jsx

import { useState, useEffect } from "react";

const UserModal = ({
  open,
  onClose,
  onSave,
  editUser,
}) => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  useEffect(() => {
    if (editUser) {
      setForm({
        fullName: editUser.fullName || "",
        username: editUser.username || "",
        email: editUser.email || "",
        password: editUser.password || "",
        role: editUser.role || "user",
      });
    } else {
      setForm({
        fullName: "",
        username: "",
        email: "",
        password: "",
        role: "user",
      });
    }
  }, [editUser]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.username ||
      !form.email ||
      !form.password
    ) {
      alert("Please fill all fields");
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-pink-600">
            {editUser ? "Edit User" : "Add User"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-red-500"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Role
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="user">
                User
              </option>

              <option value="admin">
                Admin
              </option>
            </select>
          </div>

          <div className="flex justify-end gap-4 pt-5">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold"
            >
              {editUser ? "Update User" : "Add User"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default UserModal;
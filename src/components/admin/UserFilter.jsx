// src/components/admin/UserFilter.jsx

import { Filter } from "lucide-react";

const UserFilter = ({ role, setRole }) => {
  return (
    <div className="flex items-center gap-3">
      <Filter className="text-pink-500" size={22} />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-white border border-pink-200 rounded-xl px-5 py-3
        outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200
        text-gray-700 min-w-[180px]"
      >
        <option value="All">All Users</option>
        <option value="user">Users</option>
        <option value="admin">Admins</option>
      </select>
    </div>
  );
};

export default UserFilter;
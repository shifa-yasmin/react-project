import { Search } from "lucide-react";

const UserSearch = ({ search, setSearch }) => {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={22}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white border border-pink-200 rounded-xl py-3 pl-12 pr-4 outline-none
        focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
      />
    </div>
  );
};

export default UserSearch;
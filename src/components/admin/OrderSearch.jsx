import React from "react";
import { Search } from "lucide-react";

const OrderSearch = ({ search, setSearch }) => {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500"
      />

      <input
        type="text"
        placeholder="Search by Order ID, Customer or Payment..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-pink-200 bg-white focus:outline-none focus:border-pink-500 shadow-sm"
      />
    </div>
  );
};

export default OrderSearch;
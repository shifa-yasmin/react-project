import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-80">
      <Search
        size={18}
        className="absolute left-3 top-3.5 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl outline-none focus:border-pink-500"
      />
    </div>
  );
};

export default SearchBar;
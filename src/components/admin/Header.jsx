import { Bell, Search, Settings } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center bg-white rounded-2xl shadow-sm p-5">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-72 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Notification */}
        <button className="bg-pink-100 p-3 rounded-xl hover:bg-pink-200 transition">
          <Bell
            size={20}
            className="text-pink-600"
          />
        </button>

        {/* Settings */}
        <button className="bg-pink-100 p-3 rounded-xl hover:bg-pink-200 transition">
          <Settings
            size={20}
            className="text-pink-600"
          />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-pink-50 px-4 py-2 rounded-xl">

          <div className="w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
            {user?.fullName?.charAt(0).toUpperCase() || "A"}
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              {user?.fullName || "Admin"}
            </h2>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Header;
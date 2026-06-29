import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      name: "Products",
      icon: <Package size={20} />,
      path: "/admin/products",
    },
    {
      name: "Users",
      icon: <Users size={20} />,
      path: "/admin/users",
    },
    {
      name: "Orders",
      icon: <ShoppingCart size={20} />,
      path: "/admin/orders",
    },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between fixed left-0 top-0">

      {/* Logo */}
      <div>
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-pink-500">
            Cannella
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Dessert & Drinks
          </p>
        </div>

        {/* Menu */}
        <div className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                ${
                  isActive
                    ? "bg-pink-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                }`
              }
            >
              {item.icon}
              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition"
        >
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
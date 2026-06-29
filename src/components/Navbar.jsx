import { useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLink =
    "relative text-xs font-medium tracking-[2px] uppercase text-[#f5e6d3] hover:text-pink-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 text-[#f5e6d3]">

      <div className="px-4 md:px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1
            className="
              text-2xl
              md:text-4xl
              lg:text-5xl
              font-bold
              tracking-[6px]
              text-white
              hover:text-pink-400
              transition-all
              duration-300
            "
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            CANELLA
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div
          className="hidden lg:flex items-center gap-8"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <Link to="/" className={navLink}>
            Home
          </Link>

          <Link to="/category" className={navLink}>
            Categories
          </Link>

          <Link to="/explore" className={navLink}>
            Explore
          </Link>

          <Link to="/orders" className={navLink}>
           Orders
          </Link>
        </div>

        {/* Search */}
        {/* <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search products..."
            className="
              bg-white/90
              text-black
              rounded-full
              px-5
              py-2.5
              w-56 xl:w-64
              outline-none
              border
              border-white/20
              focus:border-pink-400
              focus:ring-2
              focus:ring-pink-300
            "
          />
        </div> */}

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative"
          >
            <FiHeart className="text-xl md:text-2xl hover:text-pink-400 transition" />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="
              relative
              flex items-center
              gap-2
              bg-pink-600
              hover:bg-pink-700
              text-white
              px-3 md:px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              transition
            "
          >
            <FiShoppingCart />

            <span className="hidden md:inline">
              CART
            </span>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </Link>

          {/* User */}
          {user ? (
            <>
              <FiUser className="hidden md:block text-2xl" />

              <button
                onClick={handleLogout}
                className="
                  hidden md:block
                  bg-pink-500
                  hover:bg-pink-600
                  px-4 py-2
                  rounded-full
                  text-white
                  text-sm
                  transition
                "
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="
                hidden md:block
                bg-pink-500
                hover:bg-pink-600
                px-4 py-2
                rounded-full
                text-white
                text-sm
                transition
              "
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col items-center gap-6 py-8">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[2px] text-white hover:text-pink-400 transition"
            >
              Home
            </Link>

            <Link
              to="/category"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[2px] text-white hover:text-pink-400 transition"
            >
              Categories
            </Link>

            <Link
              to="/explore"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[2px] text-white hover:text-pink-400 transition"
            >
              Explore
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[2px] text-white hover:text-pink-400 transition"
            >
              About
            </Link>

            {!user ? (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-pink-500 px-5 py-2 rounded-full text-white hover:bg-pink-600 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-pink-500 px-5 py-2 rounded-full text-white hover:bg-pink-600 transition"
              >
                Logout
              </button>
            )}
          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
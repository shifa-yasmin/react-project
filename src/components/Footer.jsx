import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EFD9DE] text-[#6F5B61] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-[#DDBCC5]">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Cannella</h2>
            <p className="text-sm leading-7">
              Crafting elegant beverages and desserts with premium ingredients and timeless sophistication.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/drinks" className="hover:text-pink-700 transition">
                  Drinks
                </Link>
              </li>
              <li>
                <Link to="/desserts" className="hover:text-pink-700 transition">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/pudding" className="hover:text-pink-700 transition">
                  Puddings
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-pink-700 transition">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-pink-700 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-700 transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-700 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-700 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wider">
              Newsletter
            </h3>

            <p className="text-sm mb-4">
              Subscribe for exclusive offers and seasonal collections.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none outline-none bg-white"
              />

              <button className="bg-pink-700 text-white px-6 py-3 rounded-full sm:rounded-r-full sm:rounded-l-none hover:bg-pink-800 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-center md:text-left">
          <p className="text-sm">© 2026 Cannella. All rights reserved.</p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-pink-700 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-pink-700 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-pink-700 hover:text-white transition"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
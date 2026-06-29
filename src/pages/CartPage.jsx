import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";

import { useCart } from "../contexts/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl font-bold text-rose-800 mb-10">
          Your Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-12 text-center border border-pink-100">
            <ShoppingBag size={70} className="mx-auto text-rose-300" />

            <h2 className="text-3xl font-bold mt-4 text-rose-800">
              Your Cart Is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add your favorite desserts and drinks 💕
            </p>

            <Link
              to="/category"
              className="inline-block mt-6 bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-xl shadow-md transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">

          
            <div className="flex-1 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-40 h-40 object-contain rounded-xl"
                  />

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-rose-800">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {item.description}
                    </p>

                    <p className="text-rose-500 font-bold text-xl mt-4">
                      ${item.price}
                    </p>

                
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => decreaseQty(item)}
                        className="p-2 bg-rose-100 rounded-lg hover:bg-rose-200"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="text-lg font-semibold">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item)}
                        className="p-2 bg-rose-100 rounded-lg hover:bg-rose-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-rose-100 hover:bg-rose-200 text-rose-700 px-4 py-3 rounded-xl h-fit flex items-center gap-2 transition"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>
                </div>
              ))}
            </div>

           
            <div className="w-full lg:w-1/3">
              <div className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-2xl shadow-lg p-6 sticky top-32">

                <h2 className="text-3xl font-bold text-rose-800 mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Shipping</span>
                  <span>$5</span>
                </div>
                <hr className="my-4 border-pink-100" />
                <div className="flex justify-between text-2xl font-bold text-rose-700">
                  <span>Total</span>
                  <span>
                   ${(total + 5).toFixed(2)}
                  </span>
                </div>
                <Link
                  to="/checkout"
                  className="block mt-6 bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-xl text-center font-semibold shadow-md transition"
                >
                  Proceed To Checkout
                </Link>
                <Link
                  to="/category"
                  className="block mt-3 text-center border border-rose-200 text-rose-600 py-3 rounded-xl hover:bg-rose-50 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;


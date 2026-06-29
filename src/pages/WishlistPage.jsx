import { X, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WishlistPage = () => {
  const navigate = useNavigate();

  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = async (product, wishlistId) => {
    await addToCart(product);

   
    await removeFromWishlist(wishlistId);

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-[#FFF5F8]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl font-bold text-[#7C5A5A] mb-10">
          Your Favorites ❤️
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-pink-500 text-xl">
            Wishlist Empty
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-pink-600 font-bold mt-2">
                    ${product.price}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() =>
                        handleAddToCart(
                          {
                            id: product.productId,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                            description: product.description,
                          },
                          product.id
                        )
                      }
                      className="flex-1 bg-pink-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-700"
                    >
                      <ShoppingCart size={18} />
                      Add To Cart
                    </button>

                    <button
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;
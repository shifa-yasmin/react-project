import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    toggleWishlist,
    isWishlisted,
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const liked = isWishlisted(product.id);

  const handleWishlist = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const wasAdded = !liked;

    await toggleWishlist(product);

    if (wasAdded) {
      navigate("/wishlist");
    }
  };

  const handleCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await addToCart(product);

      const item = wishlist.find(
        (w) => w.productId === product.id
      );

      if (item) {
        await removeFromWishlist(item.id);
      }

      navigate("/cart");
    } catch (error) {
      console.error("Add To Cart Error:", error);
    }
  };

  return (
    <motion.div
      className="group w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-md">
       
        <div className="relative h-[420px] flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-cover"
          />

        
          <button
            onClick={handleWishlist}
            className="absolute top-4 right-4 z-20"
          >
            <Heart
              size={26}
              className={
                liked
                  ? "fill-pink-600 text-pink-600"
                  : "text-gray-500"
              }
            />
          </button>

          <button
            onClick={handleCart}
            className="
              absolute bottom-0 w-full
              bg-pink-600 text-white py-4 font-semibold
              translate-y-full opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all duration-300
            "
          >
            Add To Cart
          </button>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold">
            {product.name}
          </h3>

          <p className="text-pink-600 font-bold">
            ${product.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;


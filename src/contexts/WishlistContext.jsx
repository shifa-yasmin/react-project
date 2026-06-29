import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();

  const fetchWishlist = async (currentUser) => {
    if (!currentUser) {
      setWishlist([]);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/wishlist?userId=${currentUser.id}`
      );
      const data = await res.json();
      setWishlist(data);
    } catch (error) {
      console.error("Wishlist Fetch Error:", error);
    }
  };

  
  useEffect(() => {
    fetchWishlist(user);
  }, [user]);

 
  const addToWishlist = async (product) => {
    if (!user) return;

    const exists = wishlist.find(
      (item) =>
        item.productId === product.id &&
        item.userId === user.id
    );

    if (exists) return;

    await fetch("http://localhost:3000/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      }),
    });

    fetchWishlist(user);
  };

  
  const removeFromWishlist = async (id) => {
    await fetch(`http://localhost:3000/wishlist/${id}`, {
      method: "DELETE",
    });

    fetchWishlist(user);
  };

  const toggleWishlist = async (product) => {
    const existing = wishlist.find(
      (item) =>
        item.productId === product.id &&
        item.userId === user.id
    );

    if (existing) {
      await removeFromWishlist(existing.id);
    } else {
      await addToWishlist(product);
    }
  };

  const isWishlisted = (productId) => {
    return wishlist.some(
      (item) =>
        item.productId === productId &&
        item.userId === user.id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);



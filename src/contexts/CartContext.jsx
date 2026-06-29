import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();

  
  const fetchCart = async (currentUser) => {
    if (!currentUser) {
      setCart([]);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/cart?userId=${currentUser.id}`
      );

      const data = await res.json();
      setCart(data);
    } catch (error) {
      console.error("Cart Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchCart(user);
  }, [user]);

 
  const addToCart = async (product) => {
    if (!user) return;

    try {
      const productId = product.id;

      const existing = cart.find(
        (item) =>
          item.productId === productId &&
          item.userId === user.id
      );

      if (existing) {
        await fetch(`http://localhost:3000/cart/${existing.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            qty: existing.qty + 1,
          }),
        });
      } else {
        await fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            productId,
            name: product.name,
            image: product.image,
            price: product.price,
            description: product.description || "",
            qty: 1,
          }),
        });
      }

      fetchCart(user);
    } catch (error) {
      console.error("Add To Cart Error:", error);
    }
  };

  // INCREASE QTY
  const increaseQty = async (item) => {
    try {
      await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qty: item.qty + 1,
        }),
      });

      fetchCart(user);
    } catch (error) {
      console.error("Increase Qty Error:", error);
    }
  };

  // DECREASE QTY
  const decreaseQty = async (item) => {
    if (item.qty <= 1) return;

    try {
      await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qty: item.qty - 1,
        }),
      });

      fetchCart(user);
    } catch (error) {
      console.error("Decrease Qty Error:", error);
    }
  };

  // REMOVE ITEM
  const removeFromCart = async (id) => {
    try {
      await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
      });

      fetchCart(user);
    } catch (error) {
      console.error("Remove Cart Error:", error);
    }
  };

  // order succuss clearcart
  const clearCart = async () => {
    if (!user) return;

    try {
      const res = await fetch(
        `http://localhost:3000/cart?userId=${user.id}`
      );

      const items = await res.json();

      await Promise.all(
        items.map((item) =>
          fetch(`http://localhost:3000/cart/${item.id}`, {
            method: "DELETE",
          })
        )
      );

      setCart([]);
    } catch (error) {
      console.error("Clear Cart Error:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



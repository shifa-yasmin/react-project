import { useParams, useNavigate } from "react-router-dom";
import { useEffect,  useState } from "react";
import { useCart } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddToCart = () => {
    console.log("Button Clicked");

    addToCart(product);

    console.log("Product Added");

    navigate("/cart");
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mx-auto rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="text-xl text-green-600 mt-2">
        ₹{product.price}
      </p>

      <button
        onClick={handleAddToCart}
        className="mt-4 px-6 py-3 bg-black text-white rounded-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;





// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useCart } from "../contexts/CartContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useCart();

//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3000/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, [id]);

//  const handleAddToCart = async () => {
//   console.log("1. Button Clicked");

//   await addToCart(product);

//   console.log("2. Add To Cart Finished");

//   navigate("/cart");

//   console.log("3. Navigate Called");
// };

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <img src={product.image} alt={product.name} />

//       <h1>{product.name}</h1>

//       <p>₹{product.price}</p>

//       <button onClick={handleAddToCart}>
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default ProductDetails;
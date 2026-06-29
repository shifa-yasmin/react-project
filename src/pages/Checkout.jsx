import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  // Cart Total
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Shipping Charge
  const shippingCharge = 5;

  // Final Total
  const total = subtotal + shippingCharge;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const placeOrder = async (paymentType) => {
  const orderData = {
    userId: user.id,
    items: cart,
    subtotal,
    shippingCharge,
    total,
    paymentMethod: paymentType,
    status: "Order Placed",
    createdAt: new Date().toISOString(),

    address: {
      fullName: form.fullName,
      phone: form.phone,
      address: form.address,
      city: form.city,
      pincode: form.pincode,
    },
  };

  try {
    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    await clearCart();

    navigate("/order-success", {
      replace: true,
      state: {
        amount: total,
      },
    });
  } catch (error) {
    console.error("Order Error:", error);
    alert("Failed to place order");
  }
};

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handleRazorpay = async () => {
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay failed to load");
      return;
    }

    const options = {
      key: "rzp_test_T3vUi2DuIBnMRS",

      amount: total * 100,

      currency: "USD",

      name: "Sweet Shop",

      description: "Order Payment",

      handler: async function () {
        await placeOrder("Razorpay");
      },

      prefill: {
        name: form.fullName,
        contact: form.phone,
        email: user?.email || "",
      },

      theme: {
        color: "#ec4899",
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
  };

  const handlePlaceOrder = async () => {
    if (
      !form.fullName ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (paymentMethod === "cod") {
      await placeOrder("Cash On Delivery");
    } else {
      await handleRazorpay();
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 pt-28 pb-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Delivery Details */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-6">
              Delivery Details
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full border border-pink-200 p-3 rounded-lg"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-pink-200 p-3 rounded-lg"
              />

              <textarea
                name="address"
                rows="4"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-pink-200 p-3 rounded-lg"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="w-full border border-pink-200 p-3 rounded-lg"
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                className="w-full border border-pink-200 p-3 rounded-lg"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 max-h-72 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b border-pink-100 pb-3"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <p className="font-semibold text-pink-600">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>
                <span className="font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Shipping
                </span>
                <span className="font-medium">
                  ${shippingCharge.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between border-t pt-3">
                <span className="text-xl font-bold text-pink-600">
                  Total
                </span>
                <span className="text-xl font-bold text-pink-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-gray-700">
                Payment Method
              </h3>

              <label className="flex items-center gap-2 mb-3">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                Cash On Delivery
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="razorpay"
                  checked={paymentMethod === "razorpay"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                Razorpay
              </label>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold"
            >
              Place Order
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;


// import { useState } from "react";
// import { useCart } from "../contexts/CartContext";
// import { useAuth } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Checkout = () => {
//   const { cart, clearCart } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [paymentMethod, setPaymentMethod] = useState("cod");

//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * (item.quantity || 1),
//     0
//   );

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const placeOrder = async (paymentType) => {
//     const newOrder = {
//       id: Date.now(),
//       user: user?.email || "guest",
//       items: cart,
//       total,
//       paymentMethod: paymentType,
//       status: "Order Placed",
//       customer: form,
//       orderDate: new Date().toLocaleString(),
//     };

//     const existingOrders =
//       JSON.parse(localStorage.getItem("orders")) || [];

//     localStorage.setItem(
//       "orders",
//       JSON.stringify([...existingOrders, newOrder])
//     );

//     clearCart();

//     navigate("/order-success");
//   };

//   const loadRazorpay = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");

//       script.src = "https://checkout.razorpay.com/v1/checkout.js";

//       script.onload = () => {
//         resolve(true);
//       };

//       script.onerror = () => {
//         resolve(false);
//       };

//       document.body.appendChild(script);
//     });
//   };

//   const handleRazorpay = async () => {
//     const res = await loadRazorpay();

//     if (!res) {
//       alert("Razorpay failed to load");
//       return;
//     }

//     const options = {
//       key: "YOUR_RAZORPAY_KEY_ID",

//       amount: total * 100,

//       currency: "INR",

//       name: "Sweet Shop",

//       description: "Order Payment",

//       handler: function () {
//         placeOrder("Razorpay");
//       },

//       prefill: {
//         name: form.fullName,
//         contact: form.phone,
//         email: user?.email || "",
//       },

//       theme: {
//         color: "#ec4899",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);

//     paymentObject.open();
//   };

//   const handlePlaceOrder = async () => {
//     if (
//       !form.fullName ||
//       !form.phone ||
//       !form.address ||
//       !form.city ||
//       !form.pincode
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }

//     if (paymentMethod === "cod") {
//       await placeOrder("Cash On Delivery");
//     } else {
//       await handleRazorpay();
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-pink-50 pt-28 pb-10 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
//           {/* Delivery Details */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <h2 className="text-2xl font-bold text-pink-600 mb-6">
//               Delivery Details
//             </h2>

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={form.fullName}
//                 onChange={handleChange}
//                 className="w-full border border-pink-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />

//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full border border-pink-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />

//               <textarea
//                 name="address"
//                 placeholder="Address"
//                 rows="4"
//                 value={form.address}
//                 onChange={handleChange}
//                 className="w-full border border-pink-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />

//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={form.city}
//                 onChange={handleChange}
//                 className="w-full border border-pink-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />

//               <input
//                 type="text"
//                 name="pincode"
//                 placeholder="Pincode"
//                 value={form.pincode}
//                 onChange={handleChange}
//                 className="w-full border border-pink-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <h2 className="text-2xl font-bold text-pink-600 mb-6">
//               Order Summary
//             </h2>

//             <div className="space-y-4 max-h-72 overflow-y-auto">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center border-b border-pink-100 pb-3"
//                 >
//                   <div>
//                     <p className="font-semibold text-gray-800">
//                       {item.name}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Qty: {item.quantity || 1}
//                     </p>
//                   </div>

//                   <p className="font-semibold text-pink-600">
//                     $
//                     {(item.price * (item.quantity || 1)).toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 border-t pt-4">
//               <h3 className="text-2xl font-bold text-pink-600">
//                 Total : ${total.toFixed(2)}
//               </h3>
//             </div>

//             <div className="mt-6">
//               <h3 className="font-semibold mb-3 text-gray-700">
//                 Payment Method
//               </h3>

//               <label className="flex items-center gap-2 mb-3">
//                 <input
//                   type="radio"
//                   value="cod"
//                   checked={paymentMethod === "cod"}
//                   onChange={(e) =>
//                     setPaymentMethod(e.target.value)
//                   }
//                 />
//                 Cash On Delivery
//               </label>

//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="razorpay"
//                   checked={paymentMethod === "razorpay"}
//                   onChange={(e) =>
//                     setPaymentMethod(e.target.value)
//                   }
//                 />
//                 Razorpay
//               </label>
//             </div>

//             <button
//               onClick={handlePlaceOrder}
//               className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
//             >
//               Place Order
//             </button>
//           </div>

//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Checkout;



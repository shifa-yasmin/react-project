import { useLocation, Link } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">

        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-bold text-rose-600 mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-2">
          Thank you for your order.
        </p>

        <p className="text-rose-600 font-bold text-2xl my-6">
          Total Amount: ${state?.amount?.toFixed(2) || "0.00"}
        </p>

        <Link
          to="/"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl transition"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
};

export default OrderSuccess;


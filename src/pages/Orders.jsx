import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/orders?userId=${user.id}`
      );

      const data = await res.json();
      setOrders(data.reverse());
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Navbar />

      <main className="flex-1 pt-24 px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-rose-700 mb-8">
            My Orders
          </h1>

          {orders.length === 0 ? (
            <div className="bg-white p-10 rounded-3xl shadow text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                No Orders Found
              </h2>

              <p className="text-gray-500 mt-2">
                Start shopping and place your first order.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl shadow-lg p-6 border border-pink-100"
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-5">
                    <div>
                      <h2 className="text-xl font-bold text-rose-700">
                        Order #{order.id}
                      </h2>

                      <p className="text-gray-500">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="mt-3 md:mt-0">
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        Order Placed
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {order.items?.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between border-b pb-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-xl object-contain"
                          />

                          <div>
                            <h3 className="font-semibold">
                              {item.name}
                            </h3>

                            <p className="text-gray-500">
                              Qty: {item.qty}
                            </p>
                          </div>
                        </div>

                        <p className="font-semibold text-rose-700">
                          $
                          {(item.price * item.qty).toFixed(
                            2
                          )}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-700">
                      Total Amount
                    </h3>

                    <p className="text-2xl font-bold text-rose-700">
                      ${Number(order.total).toFixed(2)}
                    </p>
                  </div>

                  {order.address && (
                    <div className="mt-6 bg-pink-50 p-4 rounded-2xl">
                      <h4 className="font-semibold text-rose-700 mb-2">
                        Delivery Address
                      </h4>

                      <p>{order.address.fullName}</p>
                      <p>{order.address.address}</p>
                      <p>{order.address.city}</p>
                      <p>{order.address.phone}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;


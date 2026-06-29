import React from "react";
import { Eye } from "lucide-react";

const statusColors = {
  "Order Placed": "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-indigo-100 text-indigo-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const OrderTable = ({
  orders,
  onView,
  onStatusChange,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-pink-100">
          <tr>
            <th className="p-4 text-left">Order ID</th>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Items</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-left">Payment</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-pink-50 transition"
              >
                <td className="p-4 font-medium">
                  #{order.id.slice(0, 6)}
                </td>

                <td className="p-4">
                  {order.address?.fullName}
                </td>

                <td className="p-4">
                  {order.items?.length}
                </td>

                <td className="p-4 font-semibold text-pink-600">
                  ${order.total.toFixed(2)}
                </td>

                <td className="p-4">
                  {order.paymentMethod}
                </td>

                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      onStatusChange(
                        order.id,
                        e.target.value
                      )
                    }
                    className={`px-3 py-2 rounded-lg outline-none ${
                      statusColors[order.status]
                    }`}
                  >
                    <option>Order Placed</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>

                <td className="p-4">
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => onView(order)}
                    className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="text-center py-10 text-gray-500"
              >
                No Orders Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
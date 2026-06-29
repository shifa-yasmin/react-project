const RecentOrders = ({ orders }) => {
  const recentOrders = [...orders]
    .sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          Recent Orders
        </h2>

        <span className="text-sm text-pink-500 font-medium">
          {recentOrders.length} Orders
        </span>
      </div>

      {recentOrders.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          No Orders Found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-3">Customer</th>
                <th className="pb-3">Items</th>
                <th className="pb-3">Total</th>
                <th className="pb-3">Payment</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-pink-50 hover:bg-pink-100 transition"
                >
                  <td className="px-4 py-4 rounded-l-xl font-medium">
                    {order.address?.fullName}
                  </td>

                  <td className="px-4 py-4">
                    {order.items.length}
                  </td>

                  <td className="px-4 py-4 font-semibold text-pink-600">
                    ${Number(order.total).toFixed(2)}
                  </td>

                  <td className="px-4 py-4">
                    {order.paymentMethod}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Order Placed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 rounded-r-xl text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
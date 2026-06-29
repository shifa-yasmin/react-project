import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const RevenueChart = ({ orders }) => {
  const chartData = orders.map((order) => ({
    date: new Date(order.createdAt).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    }),
    revenue: order.total,
  }));

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          Revenue Overview
        </h2>

        <p className="text-gray-500 text-sm">
          Revenue generated from customer orders
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="h-80 flex items-center justify-center text-gray-400">
          No Revenue Data
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#ec4899"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#ec4899",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default RevenueChart;
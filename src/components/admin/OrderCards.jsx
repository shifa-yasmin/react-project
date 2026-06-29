import React from "react";
import {
  ShoppingBag,
  Clock,
  Truck,
  CheckCircle,
} from "lucide-react";

const OrderCards = ({ orders }) => {
  const totalOrders = orders.length;

  const placed = orders.filter(
    (order) => order.status === "Order Placed"
  ).length;

  const shipped = orders.filter(
    (order) => order.status === "Shipped"
  ).length;

  const delivered = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const totalRevenue = orders
    .reduce((sum, order) => sum + Number(order.total || 0), 0)
    .toFixed(2);

  const cards = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <ShoppingBag size={28} />,
      bg: "bg-pink-100",
      text: "text-pink-600",
    },
    {
      title: "Pending Orders",
      value: placed,
      icon: <Clock size={28} />,
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    {
      title: "Shipped",
      value: shipped,
      icon: <Truck size={28} />,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      title: "Delivered",
      value: delivered,
      icon: <CheckCircle size={28} />,
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Revenue",
      value: `$${totalRevenue}`,
      icon: <ShoppingBag size={28} />,
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition"
        >
          <div>
            <p className="text-gray-500 text-sm">
              {card.title}
            </p>

            <h2 className={`text-3xl font-bold mt-2 ${card.text}`}>
              {card.value}
            </h2>
          </div>

          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${card.bg} ${card.text}`}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCards;
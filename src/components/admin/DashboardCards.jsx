import {
  Package,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

const DashboardCards = ({
  totalProducts,
  totalUsers,
  totalOrders,
  totalRevenue,
}) => {
  const cards = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: <Package size={28} />,
      color: "bg-pink-100",
      text: "text-pink-600",
    },
    {
      title: "Total Users",
      value: totalUsers,
      icon: <Users size={28} />,
      color: "bg-pink-100",
      text: "text-pink-600",
    },
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <ShoppingCart size={28} />,
      color: "bg-pink-100",
      text: "text-pink-600",
    },
    {
      title: "Revenue",
      value: `$${Number(totalRevenue).toFixed(2)}`,
     icon: <DollarSign size={28} />,
      color: "bg-pink-100",
      text: "text-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} ${card.text} w-14 h-14 rounded-xl flex items-center justify-center`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import DashboardCards from "../components/admin/DashboardCards";
import RevenueChart from "../components/admin/RevenueChart";
import RecentOrders from "../components/admin/RecentOrders";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [productsRes, usersRes, ordersRes] = await Promise.all([
        axios.get("http://localhost:3000/products"),
        axios.get("http://localhost:3000/users"),
        axios.get("http://localhost:3000/orders"),
      ]);

      setProducts(productsRes.data);
      setUsers(usersRes.data);
      setOrders(ordersRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const totalProducts = products.length;

  const totalUsers = users.filter(
    (user) => user.role !== "admin"
  ).length;

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return (
    <div className="flex bg-pink-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">

        {/* Header */}
        <Header />

        {/* Dashboard Cards */}
        <div className="mt-6">
          <DashboardCards
            totalProducts={totalProducts}
            totalUsers={totalUsers}
            totalOrders={totalOrders}
            totalRevenue={totalRevenue}
          />
        </div>

        {/* Chart + Recent Orders */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

          <div className="xl:col-span-2">
            <RevenueChart orders={orders} />
          </div>

          <div>
            <RecentOrders orders={orders} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
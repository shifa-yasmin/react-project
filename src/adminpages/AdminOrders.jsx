import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

import OrderSearch from "../components/admin/OrderSearch";
import OrderFilter from "../components/admin/OrderFilter";

import OrderCards from "../components/admin/OrderCards";
import OrderTable from "../components/admin/OrderTable";
import OrderModal from "../components/admin/OrderModal";

import Pagination from "../components/admin/Pagination";

import { setOrders, updateOrderStatus } from "../features/orderSlice";

const AdminOrders = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders.orders);

  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 5;

  // FETCH ORDERS
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/orders");
      dispatch(setOrders(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  // STATUS CHANGE
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:3000/orders/${id}`, {
        status: newStatus,
      });

      dispatch(updateOrderStatus({ id, status: newStatus }));
    } catch (err) {
      console.log(err);
    }
  };

  // VIEW ORDER
  const handleView = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  // FILTER ORDERS
  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.address?.fullName.toLowerCase().includes(search.toLowerCase()) ||
      order.paymentMethod.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All" || order.status === status;

    return matchSearch && matchStatus;
  });

  // PAGINATION
  const lastIndex = currentPage * ordersPerPage;
  const firstIndex = lastIndex - ordersPerPage;

  const currentOrders = filteredOrders.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="flex bg-pink-50 min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Header />

        {/* TITLE */}
        <div className="flex justify-between items-center mt-6">

          <div>
            <h1 className="text-4xl font-bold text-pink-600">
              Orders
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all customer orders
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="mt-6">
          <OrderCards orders={orders} />
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex justify-between items-center my-6">
          <OrderSearch search={search} setSearch={setSearch} />

          <OrderFilter status={status} setStatus={setStatus} />
        </div>

        {/* TABLE */}
        <OrderTable
          orders={currentOrders}
          onView={handleView}
          onStatusChange={handleStatusChange}
        />

        {/* PAGINATION */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        {/* MODAL */}
        <OrderModal
          open={open}
          order={selectedOrder}
          onClose={() => {
            setOpen(false);
            setSelectedOrder(null);
          }}
        />

      </div>
    </div>
  );
};

export default AdminOrders;
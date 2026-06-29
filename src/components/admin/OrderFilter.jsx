import React from "react";

const OrderFilter = ({ status, setStatus }) => {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="px-4 py-3 rounded-xl border border-pink-200 bg-white"
    >
      <option value="All">All</option>
      <option value="Order Placed">Order Placed</option>
      <option value="Processing">Processing</option>
      <option value="Shipped">Shipped</option>
      <option value="Delivered">Delivered</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default OrderFilter;
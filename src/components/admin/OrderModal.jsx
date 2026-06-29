import React from "react";
import { X } from "lucide-react";

const OrderModal = ({ open, onClose, order }) => {
  if (!open || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-pink-500 text-white">
          <h2 className="text-2xl font-bold">
            Order Details
          </h2>

          <button
            onClick={onClose}
            className="hover:bg-pink-600 p-2 rounded-lg"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6 space-y-8">

          {/* Order Info */}
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">
              Order Information
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <p className="text-gray-500 text-sm">
                  Order ID
                </p>
                <p className="font-semibold">
                  {order.id}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Status
                </p>
                <p className="font-semibold">
                  {order.status}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Payment
                </p>
                <p className="font-semibold">
                  {order.paymentMethod}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Date
                </p>
                <p className="font-semibold">
                  {new Date(
                    order.createdAt
                  ).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Subtotal
                </p>
                <p className="font-semibold">
                  ${order.subtotal.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Shipping
                </p>
                <p className="font-semibold">
                  ${order.shippingCharge.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Grand Total
                </p>
                <p className="text-xl font-bold text-pink-600">
                  ${order.total.toFixed(2)}
                </p>
              </div>

            </div>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">
              Customer Details
            </h3>

            <div className="bg-pink-50 rounded-xl p-5 space-y-2">

              <p>
                <span className="font-semibold">
                  Name :
                </span>{" "}
                {order.address?.fullName}
              </p>

              <p>
                <span className="font-semibold">
                  Phone :
                </span>{" "}
                {order.address?.phone}
              </p>

              <p>
                <span className="font-semibold">
                  Address :
                </span>{" "}
                {order.address?.address}
              </p>

              <p>
                <span className="font-semibold">
                  City :
                </span>{" "}
                {order.address?.city}
              </p>

              <p>
                <span className="font-semibold">
                  Pincode :
                </span>{" "}
                {order.address?.pincode}
              </p>

            </div>
          </div>

          {/* Ordered Items */}
          <div>

            <h3 className="text-lg font-semibold text-pink-600 mb-4">
              Ordered Items
            </h3>

            <div className="space-y-4">

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div>
                      <h4 className="font-semibold">
                        {item.name}
                      </h4>

                      <p className="text-gray-500">
                        Qty : {item.qty}
                      </p>
                    </div>

                  </div>

                  <h4 className="font-bold text-pink-600">
                    $
                    {(item.price * item.qty).toFixed(2)}
                  </h4>

                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="p-5 border-t flex justify-end">
          <button
            onClick={onClose}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderModal;
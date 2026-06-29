import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Set all orders
    setOrders: (state, action) => {
      state.orders = action.payload;
    },

    // Update order status
    updateOrderStatus: (state, action) => {
      state.orders = state.orders.map((order) =>
        order.id === action.payload.id
          ? {
              ...order,
              status: action.payload.status,
            }
          : order
      );
    },
  },
});

export const {
  setOrders,
  updateOrderStatus,
} = orderSlice.actions;

export default orderSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   orders: [],
// };

// const orderSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {
//     setOrders: (state, action) => {
//       state.orders = action.payload;
//     },

//     updateOrderStatus: (state, action) => {
//       state.orders = state.orders.map((order) =>
//         order.id === action.payload.id
//           ? {
//               ...order,
//               status: action.payload.status,
//             }
//           : order
//       );
//     },
//   },
// });

// export const {
//   setOrders,
//   updateOrderStatus,
// } = orderSlice.actions;

// export default orderSlice.reducer;
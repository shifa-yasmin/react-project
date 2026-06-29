
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    updateUser: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id
          ? action.payload
          : user
      );
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user) => user.id !== action.payload
      );
    },

    blockUser: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload
          ? { ...user, blocked: true }
          : user
      );
    },

    unblockUser: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload
          ? { ...user, blocked: false }
          : user
      );
    },
  },
});

export const {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  blockUser,
  unblockUser,
} = userSlice.actions;

export default userSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: [],
// };

// const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     setUsers: (state, action) => {
//       state.users = action.payload;
//     },

//     blockUser: (state, action) => {
//       state.users = state.users.map((user) =>
//         user.id === action.payload
//           ? { ...user, blocked: true }
//           : user
//       );
//     },

//     unblockUser: (state, action) => {
//       state.users = state.users.map((user) =>
//         user.id === action.payload
//           ? { ...user, blocked: false }
//           : user
//       );
//     },
//   },
// });

// export const {
//   setUsers,
//   blockUser,
//   unblockUser,
// } = userSlice.actions;

// export default userSlice.reducer;
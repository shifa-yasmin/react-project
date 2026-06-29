import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catogorymain from "./Catogorymain";
import Explore from "./pages/Explore";

import DessertProducts from "./components/products/DessertProducts";
import DrinkProducts from "./components/products/DrinkProducts";
import PuddingProducts from "./components/products/PuddingProducts";

import ProductDetails from "./pages/ProductDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";

import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import OrderSuccess from "./pages/OrderSuccess";

import ProtectedRoute from "./routes/ProtectedRoute";

import Dashboard from "./adminpages/Dashboard";
import Products from "./adminpages/Products";
import Users from "./adminpages/Users"; // ✅ Import Users
import AdminOrders from "./adminpages/AdminOrders";
// import AdminOrders from "./adminpages/AdminOrders";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Catogorymain />} />
      <Route path="/explore" element={<Explore />} />

      <Route path="/desserts" element={<DessertProducts />} />
      <Route path="/drinks" element={<DrinkProducts />} />
      <Route path="/pudding" element={<PuddingProducts />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Protected Routes */}

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/order-success"
        element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute admin={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute admin={true}>
            <Products />
          </ProtectedRoute>
        }
      />

      {/* ✅ Users Route */}

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute admin={true}>
            <Users />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute admin={true}>
            <AdminOrders />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;



// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Catogorymain from "./Catogorymain";
// import Explore from "./pages/Explore";

// import DessertProducts from "./components/products/DessertProducts";
// import DrinkProducts from "./components/products/DrinkProducts";
// import PuddingProducts from "./components/products/PuddingProducts";

// import ProductDetails from "./pages/ProductDetails";

// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import WishlistPage from "./pages/WishlistPage";
// import CartPage from "./pages/CartPage";
// import Checkout from "./pages/Checkout";
// import Orders from "./pages/Orders";
// import OrderSuccess from "./pages/OrderSuccess";

// import ProtectedRoute from "./routes/ProtectedRoute";

// import Dashboard from "./adminpages/Dashboard";
// import Products from "./adminpages/Products";
// // import Users from "./adminpages/Users";
// // import AdminOrders from "./adminpages/AdminOrders";

// function App() {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Home />} />
//       <Route path="/category" element={<Catogorymain />} />
//       <Route path="/explore" element={<Explore />} />

//       <Route path="/desserts" element={<DessertProducts />} />
//       <Route path="/drinks" element={<DrinkProducts />} />
//       <Route path="/pudding" element={<PuddingProducts />} />

//       <Route path="/product/:id" element={<ProductDetails />} />

//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* User Protected Routes */}

//       <Route
//         path="/wishlist"
//         element={
//           <ProtectedRoute>
//             <WishlistPage />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/cart"
//         element={
//           <ProtectedRoute>
//             <CartPage />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/checkout"
//         element={
//           <ProtectedRoute>
//             <Checkout />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/orders"
//         element={
//           <ProtectedRoute>
//             <Orders />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/order-success"
//         element={
//           <ProtectedRoute>
//             <OrderSuccess />
//           </ProtectedRoute>
//         }
//       />

//       {/* Admin Routes */}

//       <Route
//         path="/admin/dashboard"
//         element={
//           <ProtectedRoute admin={true}>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/admin/products"
//         element={
//           <ProtectedRoute admin={true}>
//             <Products />
//           </ProtectedRoute>
//         }
//       />

//       {/* <Route
//         path="/admin/users"
//         element={
//           <ProtectedRoute admin={true}>
//             <Users />
//           </ProtectedRoute>
//         }
//       /> */}

//       {/* <Route
//         path="/admin/orders"
//         element={
//           <ProtectedRoute admin={true}>
//             <AdminOrders />
//           </ProtectedRoute>
//         }
//       />  */}
//     </Routes>
//   );
// }

// export default App;
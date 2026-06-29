import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const user = await login(form.email, form.password);

    console.log(user);

    if (user.role === "admin") {
      console.log("Going to dashboard...");
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

          <div className="hidden md:flex justify-center">
            <img
              src="/dragonfrt.jpeg"
              alt="Cannella"
              className="w-full max-w-md h-[650px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8"
          >
            <h1 className="text-4xl font-bold text-center text-pink-500 mb-2">
              Cannella
            </h1>

            <p className="text-center text-gray-500 mb-6">
              Welcome Back
            </p>

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border border-pink-200 rounded-xl p-3 mb-4 outline-none focus:border-pink-500"
              required
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full border border-pink-200 rounded-xl p-3 mb-4 outline-none focus:border-pink-500"
                required
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-3 text-pink-500"
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl"
            >
              Login
            </button>

            <p className="text-center mt-5">
              Don't have an account?
              <Link
                to="/register"
                className="text-pink-500 font-semibold ml-2"
              >
                Register
              </Link>
            </p>
          </form>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [show, setShow] = useState(false);
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await login(form.email, form.password);
//       // alert("Login Success");
//       navigate("/");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
// <div>
//   <Navbar/>
//   <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
//   <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

  
//     <div className="hidden md:flex justify-center">
//       <img
//         src="/dragonfrt.jpeg"
//         alt="Cannella"
//         className="
//           w-full
//           max-w-md
//           h-[650px]
//           object-cover
//           rounded-3xl
//           shadow-xl
//         "
//       />
//     </div>

   
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8"
//     >
//       <h1 className="text-4xl font-bold text-center text-pink-500 mb-2">
//         Cannella
//       </h1>

//       <p className="text-center text-gray-500 mb-6">
//         Welcome Back
//       </p>

//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full border border-pink-200 rounded-xl p-3 mb-4 outline-none focus:border-pink-500"
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       <div className="relative">
//         <input
//           type={show ? "text" : "password"}
//           placeholder="Password"
//           className="w-full border border-pink-200 rounded-xl p-3 mb-4 outline-none focus:border-pink-500"
//           onChange={(e) =>
//             setForm({ ...form, password: e.target.value })
//           }
//         />

//         <button
//           type="button"
//           onClick={() => setShow(!show)}
//           className="absolute right-4 top-3 text-pink-500"
//         >
//           {show ? "Hide" : "Show"}
//         </button>
//       </div>

//       <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl">
//         Login
//       </button>

//       <p className="text-center mt-5">
//         Don't have an account?
//         <Link
//           to="/register"
//           className="text-pink-500 font-semibold ml-2"
//         >
//           Register
//         </Link>
//       </p>
//     </form>

//   </div>
// </div>
// <Footer/>
// </div>
//   );
// };

// export default Login;
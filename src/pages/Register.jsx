import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Register = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();

    const existingUser = users.find(
      (user) => user.email === form.email
    );

    if (existingUser) {
      return alert("Email already exists");
    }

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Registration Success");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4 py-10">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

       
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/registerpic.jpeg"
              alt="Register"
              className="
                w-full
                max-w-md
                h-[600px]
                object-cover
                rounded-3xl
                shadow-2xl
              "
            />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              w-full
              max-w-md
              bg-white
              shadow-xl
              rounded-3xl
              p-8
              mx-auto
            "
          >
            <h1 className="text-4xl font-bold text-center text-pink-500 mb-6">
              Create Account
            </h1>

            <input
              type="text"
              placeholder="Username"
              className="
                w-full
                border
                border-pink-200
                rounded-xl
                p-3
                mb-3
                outline-none
                focus:border-pink-500
              "
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                border
                border-pink-200
                rounded-xl
                p-3
                mb-3
                outline-none
                focus:border-pink-500
              "
              onChange={(e) =>
                setForm({
                  ...form,
                  fullName: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="
                w-full
                border
                border-pink-200
                rounded-xl
                p-3
                mb-3
                outline-none
                focus:border-pink-500
              "
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="
                  w-full
                  border
                  border-pink-200
                  rounded-xl
                  p-3
                  mb-4
                  outline-none
                  focus:border-pink-500
                "
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
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
              className="
                w-full
                bg-pink-500
                hover:bg-pink-600
                text-white
                py-3
                rounded-xl
                transition
              "
            >
              Register
            </button>

            <p className="text-center mt-5">
              Already have an account?
              <Link
                to="/login"
                className="text-pink-500 font-semibold ml-2"
              >
                Login
              </Link>
            </p>
          </motion.form>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/products/ProductCard";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  let filteredProducts = [...products];

  if (search.trim()) {
    filteredProducts = filteredProducts.filter((item) => {
      const name = item.name || item.title || "";
      const categoryName = item.category || "";

      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        categoryName.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === category
    );
  }

  if (priceRange === "0-15") {
    filteredProducts = filteredProducts.filter(
      (item) => Number(item.price) >= 0 && Number(item.price) <= 15
    );
  }

  if (priceRange === "15-25") {
    filteredProducts = filteredProducts.filter(
      (item) => Number(item.price) > 15 && Number(item.price) <= 25
    );
  }

  if (priceRange === "25-35") {
    filteredProducts = filteredProducts.filter(
      (item) => Number(item.price) > 25 && Number(item.price) <= 35
    );
  }

  if (priceRange === "35+") {
    filteredProducts = filteredProducts.filter(
      (item) => Number(item.price) > 35
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50 pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.h1
            className="text-center text-5xl font-bold text-pink-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Explore Products
          </motion.h1>

          <motion.div
            className="mb-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-5 py-3 rounded-xl border border-pink-200 shadow-md bg-white outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">

            <motion.div
              className="lg:w-72 shrink-0"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="sticky top-28 bg-white p-6 rounded-3xl shadow-xl border border-pink-200">
                <h2 className="text-2xl font-bold text-pink-600 mb-6">
                  Filters
                </h2>

                <div className="border border-pink-200 rounded-2xl p-4 mb-8">
                  <h3 className="font-semibold text-pink-600 mb-4">
                    Categories
                  </h3>

                  <div className="space-y-3">
                    {["All", "Desserts", "Drinks", "Pudding"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`w-full py-3 rounded-xl font-medium transition ${
                          category === cat
                            ? "bg-pink-500 text-white"
                            : "bg-pink-100 hover:bg-pink-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border border-pink-200 rounded-2xl p-4">
                  <h3 className="font-semibold text-pink-600 mb-4">
                    Price Range
                  </h3>

                  <div className="space-y-3">
                    {[
                      ["All", "All"],
                      ["0-15", "$0 - $15"],
                      ["15-25", "$15 - $25"],
                      ["25-35", "$25 - $35"],
                      ["35+", "$35+"],
                    ].map(([value, label]) => (
                      <button
                        key={value}
                        onClick={() => setPriceRange(value)}
                        className={`w-full py-3 rounded-xl font-medium transition ${
                          priceRange === value
                            ? "bg-pink-500 text-white"
                            : "bg-pink-100 hover:bg-pink-200"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex-1">
              <p className="text-gray-600 font-medium mb-6">
                {filteredProducts.length} Products Found
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <h2 className="text-3xl font-bold text-pink-500">
                      No Products Found 
                    </h2>
                    <p className="text-gray-500 mt-3">
                      Try another search keyword.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Explore;


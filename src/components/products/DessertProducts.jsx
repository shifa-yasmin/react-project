import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DessertProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const desserts = data.filter(
          (item) => item.category === "Desserts"
        );
        setProducts(desserts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[oklch(97.1%_0.014_343.198)] min-h-screen">
      <Navbar />

      <section className="relative w-full h-[700px] overflow-hidden">
        <motion.img
          src="/dessertmain.jpeg"
          alt="Desserts"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-5"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Delicious Desserts
          </h1>

          <p className="mt-4 text-lg">
            Handcrafted desserts with premium ingredients
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold text-pink-700">
            Our Dessert Collection
          </h2>

          <p className="text-gray-500 mt-3">
            Explore our delicious handcrafted desserts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DessertProducts;
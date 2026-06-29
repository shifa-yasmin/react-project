import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProductCard from "./ProductCard";

const DrinkProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const drinks = data.filter(
          (item) => item.category === "Drinks"
        );
        setProducts(drinks);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[oklch(97.1%_0.014_343.198)] min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <motion.img
          src="/drinksmain.jpeg"
          alt="Drinks Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3 }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] text-pink-300 mb-4">
            Premium Collection
          </p>

          <h1 className="text-5xl md:text-8xl font-bold">
            Refreshing Drinks
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-200">
            Explore our fresh fruit drinks collection crafted with natural ingredients and premium flavors.
          </p>
        </motion.div>
      </section>

      <motion.section
        className="max-w-7xl mx-auto px-6 pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-200 pb-8">
          <div>
            <p className="uppercase tracking-[0.2em] text-pink-600 text-sm">
              Curated Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-2">
              Signature Drinks
            </h2>
          </div>

          <p className="max-w-md text-gray-600 leading-relaxed">
            Discover our most loved beverages, blending freshness, flavor and premium quality in every sip.
          </p>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default DrinkProducts;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PuddingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const puddings = data.filter(
          (item) => item.category === "Pudding"
        );
        setProducts(puddings);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[oklch(97.1%_0.014_343.198)] min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <motion.img
          src="/puddingbanner.jpeg"
          alt="Pudding Banner"
          className="w-full h-auto object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Creamy Puddings
          </h1>

          <p className="text-lg md:text-xl max-w-2xl">
            Rich, silky and handcrafted desserts made with premium ingredients and fresh flavors.
          </p>
        </motion.div>
      </div>

      <motion.section
        className="border-b border-gray-200 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-pink-600 mb-2">
              Curated Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-serif text-[#6B4C4C]">
              Signature Desserts
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-700 leading-relaxed">
              Discover our most beloved creations, where artisanal craftsmanship meets seasonal inspiration.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold text-pink-700">
            Creamy Puddings
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover our rich, silky, and handcrafted pudding collection made with fresh fruits and premium ingredients.
          </p>
        </motion.div>

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

export default PuddingProducts;
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Dragonfruit Dessert",
      price: "34.99",
      badge: "Best Seller",
      image: "/dragonfrt.jpeg",
    },
    {
      id: 2,
      name: "Lychee Cooler",
      price: "18.99",
      image: "/lichi.jpeg",
    },
    {
      id: 3,
      name: "Strawberry Pudding",
      price: "17.99",
      badge: "Limited Edition",
      image: "/strawberry.jpeg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-pink-500 text-sm mb-4 font-medium">
            Canella Desserts
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-pink-900">
            Trending Treats
          </h2>

          <p className="text-pink-600 mt-4 max-w-xl mx-auto">
            Delightful puddings, creamy milkshakes, and handcrafted desserts made with love.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white/70 backdrop-blur-xl border border-pink-200 rounded-3xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
            >

            
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-110"
                />

              
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-transparent to-transparent" />

               
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-[3px]">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6 text-center">

                <h3 className="text-pink-900 text-2xl font-serif mb-2">
                  {product.name}
                </h3>

                <p className="text-pink-600 font-semibold mb-6 text-lg">
                  ${product.price}
                </p>

                <button
                  onClick={() => navigate("/explore")}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 rounded-xl uppercase tracking-[3px] text-xs hover:from-pink-500 hover:to-pink-600 transition duration-300"
                >
                  Explore Collection
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Trending;


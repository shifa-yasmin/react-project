import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    badge: "New Arrival",
    title: "Dessert",
    route: "/desserts",
    description: "Artisanal & Exotic. Experience the bold taste of real dragon fruit.",
    image: "/dragonfrt.jpeg",
  },
  {
    id: 2,
    badge: "Seasonal",
    title: "Drinks",
    route: "/drinks",
    description: "Fresh & Refreshing. Naturally crisp floral taste.",
    image: "/lichi.jpeg",
  },
  {
    id: 3,
    badge: "Bestseller",
    title: "Pudding",
    route: "/pudding",
    description: "Sweet & Classic. Smooth creamy pudding experience.",
    image: "/pudding.jpeg",
  },
];

const Catogorymain = () => {
  return (
    <div className="bg-[oklch(97.1%_0.014_343.198)] min-h-screen">
      <section className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <motion.img
          src="/catogory.jpeg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-wide">
            Cannella
          </h1>

          <p className="text-lg md:text-2xl mt-4 text-gray-200 max-w-2xl">
            Explore handcrafted desserts, drinks & puddings
          </p>
        </motion.div>
      </section>

      <section className="bg-[#fff1f5] py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={item.route}
                  className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                >
                  <div className="relative h-[420px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 relative">
                    <span className="absolute -top-4 right-6 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                      {item.badge}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-wide">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      {item.description}
                    </p>

                    <button className="mt-6 w-full border border-pink-500 text-pink-500 py-3 rounded-full uppercase text-xs tracking-[2px] hover:bg-pink-500 hover:text-white transition">
                      Shop Category
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Catogorymain;
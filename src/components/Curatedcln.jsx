
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Curatedcln = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff1f5] via-[#ffe4ec] to-[#ffd6e5] py-20 px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-300/30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

       
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-pink-500 text-sm mb-4">
            Canella Desserts
          </p>

          <h2
            className="text-[#831843] text-4xl md:text-6xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Curated Collection
          </h2>

          <div className="w-24 h-[2px] bg-pink-400 mx-auto my-6"></div>

          <p className="text-pink-700 text-lg">
            Crafted with sweetness for every occasion
          </p>
        </motion.div>

      
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-[950px] md:h-[650px]">

          {/*DRINK*/}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl border border-pink-300/50 group-hover:border-pink-500 transition-all duration-500 z-20"></div>

            <img
              src="/drinkshome.jpeg"
              alt="Premium Drinks"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-10 z-30">
              <span className="uppercase tracking-[4px] text-pink-200 text-xs">
                Signature Collection
              </span>

              <h2
                className="text-white text-4xl mt-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Premium Drinks
              </h2>

              <p className="text-pink-100 mt-4 max-w-sm leading-7">
                Refreshing milkshakes, coolers and handcrafted beverages
                made with premium ingredients and irresistible flavours.
              </p>

              <button
                onClick={() => navigate("/drinks")}
                className="mt-8 px-7 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300 uppercase tracking-[3px] text-xs"
              >
                Explore Collection →
              </button>
            </div>
          </motion.div>

          {/*PUDDINGS*/}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl border border-pink-300/50 group-hover:border-pink-500 transition-all duration-500 z-20"></div>

            <img
              src="/puddinghome.jpeg"
              alt="Puddings"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 z-30">
              <span className="uppercase tracking-[4px] text-pink-200 text-[11px]">
                Best Seller
              </span>

              <h2
                className="text-white text-3xl mt-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Signature Puddings
              </h2>

              <p className="text-pink-100 mt-3 max-w-sm">
                Smooth, creamy and handcrafted puddings made to satisfy
                every dessert lover.
              </p>

              <button
                onClick={() => navigate("/pudding")}
                className="mt-6 px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300 uppercase tracking-[3px] text-xs"
              >
                Explore Collection →
              </button>
            </div>
          </motion.div>

          {/* dessert */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer"
          >
            <div className="absolute inset-0 rounded-3xl border border-pink-300/50 group-hover:border-pink-500 transition-all duration-500 z-20"></div>

            <img
              src="/dessertmain.jpeg"
              alt="Dessert Boxes"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 z-30">
              <span className="uppercase tracking-[4px] text-pink-200 text-[11px]">
                Special Collection
              </span>

              <h2
                className="text-white text-3xl mt-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Dessert Boxes
              </h2>

              <p className="text-pink-100 mt-3 max-w-sm">
                Beautifully curated dessert assortments perfect for gifts,
                celebrations and memorable occasions.
              </p>

              <button
                onClick={() => navigate("/desserts")}
                className="mt-6 px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300 uppercase tracking-[3px] text-xs"
              >
                Explore Collection →
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Curatedcln;


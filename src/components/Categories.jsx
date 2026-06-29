import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f8eef0] py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[4px] text-pink-700 text-xs font-semibold mb-4">
              Artisanal & Refreshing
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6f5b61] leading-tight mb-6">

              Indulge in the Art of
              <br />
              Sophistication.
            </h1>
            <p className="text-gray-600 max-w-md mb-8">
              Discover our signature collection of handcrafted beverages
              and desserts, where every layer tells a story of premium
              ingredients and meticulous craft.
            </p>
            <button
              onClick={() => navigate("/explore")}
              className="
              px-6 py-3 
              rounded-full 
              bg-pink-700 
              text-white
              hover:bg-pink-800
              transition duration-300
              "
            >
              Explore Our Collection
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
<img src="/str.jpeg"alt="drink"className=" w-[280px] md:w-[400px] rounded-2xl 
shadow-[0_25px_60px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-500"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Categories;


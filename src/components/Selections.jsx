// // Selections.jsx
// import {motion} from "framer-motion"
// const selections = [
//   {
//     title: "Lychee Infusions",
//     subtitle: "REFRESHING",
//     image: "/lychee.jpg",
//     large: true,
//   },
//   {
//     title: "Artisanal Parfaits",
//     subtitle: "INDULGENT",
//     image: "/parfait.jpg",
//   },
//   {
//     title: "Confections",
//     subtitle: "",
//     image: "/chocolate.jpg",
//   },
//   {
//     title: "Signature Spritzes",
//     subtitle: "",
//     image: "/spritz.jpg",
//     wide: true,
//   },
// ];



// export default function Selections() {
//   return (
//     <section className="py-20 bg-[#f8e8eb]">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-serif text-[#7c5b63]">
//             Curated Selections
//           </h2>
//           <div className="w-16 h-1 bg-pink-300 mx-auto mt-3 rounded-full"></div>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid grid-cols-3 gap-4">

//           {/* Top Left */}
//           <motion.div
//             initial={{ opacity: 0, rotateY: -90 }}
//             whileInView={{ opacity: 1, rotateY: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 1 }}
//             whileHover={{ scale: 1.03 }}
//             style={{ transformOrigin: "left center" }}
//             className="col-span-2 relative overflow-hidden rounded-xl group"
//           >
//             <img
//               src="/dragonfrt.jpeg"
//               alt="Lychee Infusions"
//               className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 text-white">
//               <span className="text-xs uppercase tracking-wider">
//                 Refreshing
//               </span>
//               <h3 className="text-3xl font-serif">
//                 Lychee Infusions
//               </h3>
//             </div>
//           </motion.div>

//           {/* Top Right */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             whileHover={{ scale: 1.03 }}
//             className="relative overflow-hidden rounded-xl group"
//           >
//             <img
//               src="/lichi.jpeg"
//               alt="Artisanal Parfaits"
//               className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-6 text-white">
//               <span className="text-xs uppercase tracking-wider">
//                 Indulgent
//               </span>
//               <h3 className="text-2xl font-serif">
//                 Artisanal Parfaits
//               </h3>
//             </div>
//           </motion.div>

//           {/* Bottom Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             whileHover={{ scale: 1.03 }}
//             className="relative overflow-hidden rounded-xl group"
//           >
//             <img
//               src="/str.jpeg"
//               alt="Confections"
//               className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/20 flex items-end p-6">
//               <h3 className="text-2xl font-serif text-white">
//                 Confections
//               </h3>
//             </div>
//           </motion.div>

//           {/* Bottom Right */}
//           <motion.div
//             initial={{ opacity: 0, rotateY: 90 }}
//             whileInView={{ opacity: 1, rotateY: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             whileHover={{ scale: 1.03 }}
//             style={{ transformOrigin: "right center" }}
//             className="col-span-2 relative overflow-hidden rounded-xl group"
//           >
//             <img
//               src="/pudding.jpeg"
//               alt="Signature Spritzes"
//               className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/20 flex items-end p-6">
//               <h3 className="text-3xl font-serif text-white">
//                 Signature Spritzes
//               </h3>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
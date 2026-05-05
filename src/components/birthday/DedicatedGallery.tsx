import { motion } from "framer-motion";

// ✅ FIXED PATH (2 baar upar jana hai)
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic4.jpg";
import pic5 from "../../img/pic5.jpg";
import pic6 from "../../img/pic6.jpg";

const photos = [
  { caption: "the prettiest soul 💕", rotate: -6, img: pic1 },
  { caption: "my favorite person", rotate: 4, img: pic2 },
  { caption: "my sunshine ☀️", rotate: -3, img: pic3 },
  { caption: "pure happiness", rotate: 6, img: pic4 },
  { caption: "my comfort place", rotate: -5, img: pic5 },
  { caption: "my forever girl 💖", rotate: 3, img: pic6 },
];

export function DedicatedGallery() {
  return (
    <div className="py-16">
      
      {/* 💖 HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        💖 My Girl 💖
      </h2>

      {/* 🌸 GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {photos.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: m.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            className="p-4 rounded-2xl shadow-lg"
          >
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={m.img}
                alt={m.caption}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-center mt-3 text-lg">
              {m.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}